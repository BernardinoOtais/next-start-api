import { prisma } from "@/client-adapters/auth/auth";

export const getUserDb = async (userId: string) =>
  prisma.user.findUnique({
    where: { id: userId },
    select: {
      apelido: true,
      userPapeis: {
        select: { Papeis: { select: { descPapel: true } } },
        orderBy: {
          Papeis: {
            descPapel: "asc",
          },
        },
      },
    },
  });
