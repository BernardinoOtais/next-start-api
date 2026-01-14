import { prisma } from "@prisma/qualidade/qualidade";
import { DadosParaPesquisaComPaginacaoEOrdemDto } from "@repo/tipos/";
import { BmSchemas } from "@repo/tipos/qualidade/balancom";

import { getNumeroBms } from "./get-numero-bss";

export const getBmSssBd = async ({
  skip,
  take,
  fechado,
  ordem,
}: DadosParaPesquisaComPaginacaoEOrdemDto) => {
  const [bms, totalCount] = await Promise.all([
    prisma.bm
      .findMany({
        where: { fechado },
        include: {
          BmMalhas: {
            include: {
              BmOpsPorMalha: {
                include: {
                  BmMovimentosLotes: true,
                },
              },
            },
          },
          BmOp: {
            include: {
              BmOpFaturado: {
                orderBy: { fData: "asc" },
              },
            },
          },
          BmTc: true,
        },
        skip,
        take,
        orderBy: { CreatedAt: ordem },
      })
      .then((raw) => BmSchemas.parse(raw)),

    getNumeroBms(fechado),
  ]);

  return {
    lista: bms,
    tamanhoLista: totalCount,
  };
};
