import { prisma } from "@prisma/qualidade/qualidade";
import { OpDto } from "@repo/tipos/qualidade/balancom";
import sql from "sql-template-tag";

export const postNovoBalancoMassasBd = async (dados: OpDto) =>
  prisma.$queryRaw(sql`exec BmPostPrimeiraOp ${dados.op} `);
