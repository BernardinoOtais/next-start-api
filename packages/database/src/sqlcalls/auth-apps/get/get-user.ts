import { prisma } from "@prisma/authapps/auth";

export const getUserDb = async (userId: string) =>
  prisma.user.findUnique({
    where: { id: userId },
    select: {
      apelido: true,
      userPapeis: {
        select: {
          papel: { select: { descPapel: true } },
          userPapeisPermissoes: {
            select: { permissao: { select: { descPermissao: true } } },
          },
        },
        orderBy: {
          papel: {
            descPapel: "asc",
          },
        },
      },
    },
  });
