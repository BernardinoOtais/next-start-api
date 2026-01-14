import { getSession } from "@repo/authweb/authnext/session";
import loggerWeb from "@repo/logger/logger-web";
import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";

export const createTRPCNextContext = cache(async (headers: Headers) => {
  const session = await getSession(headers);

  return {
    session,
  };
});

const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
  errorFormatter({ shape, error }) {
    console.log("tRPC validation error:", error);
    return shape;
  },
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;

export const baseProcedure = t.procedure;
