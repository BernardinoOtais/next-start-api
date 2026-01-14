import { prisma } from "@prisma/qualidade/qualidade";

export const getNumeroBms = (fechado: boolean): Promise<number> =>
  prisma.bm.count({
    where: { fechado },
  });
