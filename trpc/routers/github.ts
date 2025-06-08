import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { TRPCError } from "@trpc/server";

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const contributionDataSchema = z.object({
  totalContributions: z.number(),
  weeks: z.array(
    z.object({
      contributionDays: z.array(
        z.object({
          date: z.string(),
          contributionCount: z.number(),
          color: z.string(),
        })
      ),
    })
  ),
});

export const githubRouter = createTRPCRouter({
  getContributions: baseProcedure
    .input(
      z.object({
        year: z.number(),
      })
    )
    .query(async ({ input }): Promise<ContributionData> => {
      const { year } = input;
      const username = process.env.GITHUB_USERNAME;

      if (!username) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "GitHub username not configured",
        });
      }

      const startDate = new Date(year, 0, 1).toISOString();
      const endDate = new Date(year, 11, 31).toISOString();

      const response = await fetch(`https://api.github.com/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          query: `
              query($username: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $username) {
                  contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                          color
                        }
                      }
                    }
                  }
                }
              }
            `,
          variables: {
            username,
            from: startDate,
            to: endDate,
          },
        }),
      });

      if (!response.ok) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to fetch GitHub contributions",
        });
      }

      const data = await response.json();

      if (data.errors) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: data.errors[0].message,
        });
      }

      const contributionData =
        data.data.user.contributionsCollection.contributionCalendar;

      // Validate the response data against our schema
      const validatedData = contributionDataSchema.parse(contributionData);

      return validatedData;
    }),
});
