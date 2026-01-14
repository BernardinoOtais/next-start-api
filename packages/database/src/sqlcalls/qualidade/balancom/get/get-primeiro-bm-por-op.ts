import { prisma } from "@prisma/qualidade/qualidade";
import { OpDto } from "@repo/tipos/qualidade/balancom";

export const getPrimeiroBmPorOpDb = async (dados: OpDto) =>
  await prisma.bmOp.findFirst({
    where: dados,
    select: {
      op: true,
      Bm: { select: { fechado: true, idBm: true } },
    },
  });
