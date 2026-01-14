import { getSessionCookie } from "better-auth/cookies";

export { getSessionCookie };
import { auth } from "./auth-next";

export const getSession = (headers: Headers) =>
  auth.api.getSession({ headers });
