import { server } from "@config/config";

export function parseAPIVersion(version: number) {
  return server.API_URI!.replace("$v", `v${version}`);
}
