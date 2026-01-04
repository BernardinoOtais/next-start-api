import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import { options } from "@/root/auth-options";

export const auth = betterAuth({
  ...options,
  plugins: [tanstackStartCookies(), ...(options.plugins ?? [])],
});
