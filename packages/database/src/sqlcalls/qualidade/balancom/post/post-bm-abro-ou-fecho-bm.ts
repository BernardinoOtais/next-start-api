import { prisma } from "@prisma/qualidade/qualidade";
import { IdBmBooleanAbreOuFecha } from "@repo/tipos/qualidade/balancom";
import { z } from "zod";

export const postAbroOuFechoBmBd = async (
  value: z.infer<typeof IdBmBooleanAbreOuFecha>
) =>
  await prisma.$executeRaw`UPDATE bm SET fechado = iif(fechado=0,1,0) WHERE idBm = ${value.idBm}`;
