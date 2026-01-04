import { toNextJsHandler } from "@repo/authweb/auth";
import { auth } from "@repo/authweb/auth";

export const { POST, GET } = toNextJsHandler(auth);
