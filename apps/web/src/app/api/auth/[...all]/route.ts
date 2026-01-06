import { toNextJsHandler } from "@repo/authweb/authnext";
import { auth } from "@repo/authweb/authnext";

export const { POST, GET } = toNextJsHandler(auth);
