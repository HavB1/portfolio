import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { githubRouter } from "./github";

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  github: githubRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
