import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { toNextJsHandler } from "better-auth/next-js";

import { options } from "@/root/auth-options";

const auth = betterAuth({
  ...options,
  plugins: [nextCookies(), ...(options.plugins ?? [])],
});

export { toNextJsHandler, auth };
