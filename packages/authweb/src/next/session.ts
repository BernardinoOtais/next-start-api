import { getSessionCookie } from "better-auth/cookies";

import { auth } from "./auth-next";

export const getSessionFromRequest = async (request: Request) => {
  return await auth.api.getSession({
    headers: request.headers,
  });
};

export const getSessionFromRequestSoComACabeca = async (headers: Headers) => {
  console.log("Header recebido :    ", { headers });
  return await auth.api.getSession({ headers });
};

export const getSessionFromRequestValidaPapeis = async (
  request: Request,
  papeisRecebidos: string[]
) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    throw new Error("Unauthorized: Session not found");
  }

  const papeis = session.papeis;

  if (!papeis || papeis.length === 0) {
    throw new Error("Forbidden: No roles assigned to this user");
  }

  const hasRole = papeisRecebidos.some((papel) => papeis.includes(papel));

  if (!hasRole) {
    throw new Error(
      "Forbidden: User does not have permission to access this resource"
    );
  }

  return session;
};

export { getSessionCookie };
