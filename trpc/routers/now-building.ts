import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

// Fixed on the server so the token can only ever read this one repository.
const repo = { owner: "HavB1", name: "mhatrix", branch: "testing" };

const commitSchema = z.array(
  z.object({
    sha: z.string(),
    parents: z.array(z.unknown()),
    commit: z.object({
      message: z.string(),
      author: z.object({ date: z.string() }).nullable(),
    }),
  }),
);

export type NowBuildingCommit = { sha: string; message: string; date: string | null };

export const nowBuildingRouter = createTRPCRouter({
  commits: baseProcedure.query(async (): Promise<NowBuildingCommit[]> => {
    const token = process.env.QPS_GITHUB_TOKEN;
    if (!token) return [];

    const res = await fetch(
      `https://api.github.com/repos/${repo.owner}/${repo.name}/commits?sha=${repo.branch}&per_page=15`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) return [];

    const parsed = commitSchema.safeParse(await res.json());
    if (!parsed.success) return [];

    return parsed.data
      .filter((c) => c.parents.length < 2)
      .slice(0, 3)
      .map((c) => ({
        sha: c.sha.slice(0, 7),
        message: c.commit.message
          .split("\n")[0]
          .replace(/^\w+(\([^)]*\))?!?:\s*/, ""),
        date: c.commit.author?.date ?? null,
      }));
  }),
});
