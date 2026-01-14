import z from "zod";

import {
  InteiroNaoNegativoSchema,
  NewIdSql,
  NumeroInteiroMaiorQueZero,
  StringComTamanhoSchema,
} from "@/comum";

export const NumeroOuZero = z.coerce
  .number({
    error: (issue) =>
      issue.input === undefined
        ? "Tem que inserrir números..."
        : "Formato errado...",
  })
  .min(0, { message: "Qtde positiva..." });

export const Numero = z.coerce.number({
  error: (issue) =>
    issue.input === undefined
      ? "Tem que inserrir números..."
      : "Formato errado...",
});

export const BmMalhasFioMovimentosSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  refOrigem: StringComTamanhoSchema(18, 1),
  op: InteiroNaoNegativoSchema,
  idBmMovimentosLote: NewIdSql,
  idMovimento: StringComTamanhoSchema(25),
  nMovimento: z.number().int(),
  nome: StringComTamanhoSchema(55, 1),
  idTipo: Numero,
  tipo: StringComTamanhoSchema(50, 1),
  qtt: Numero,
  unidade: StringComTamanhoSchema(4),
  lote: StringComTamanhoSchema(4000),
});

export const BmOpsPorMalhaFioSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  refOrigem: StringComTamanhoSchema(18, 1),
  op: NumeroInteiroMaiorQueZero,
  BmMalhasFioMovimentos: z.array(BmMalhasFioMovimentosSchema).optional(),
});

export const BmMalhasFioSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  refOrigem: StringComTamanhoSchema(18, 1),
  fio: StringComTamanhoSchema(60),
  grupo: StringComTamanhoSchema(3),
  subGrupo: StringComTamanhoSchema(3),
  qtdePedida: Numero,
  qtdeEntrada: Numero,
  defeitosStock: Numero,
  sobras: Numero,
  unidade: StringComTamanhoSchema(4),
  lote: StringComTamanhoSchema(4000),
  BmOpsPorMalhaFio: z.array(BmOpsPorMalhaFioSchema).optional(),
});

export const BmMalhasFio = z.array(BmMalhasFioSchema).optional();

const BmMovimentosLotesSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  op: InteiroNaoNegativoSchema,
  idBmMovimentosLote: NewIdSql,
  idMovimento: StringComTamanhoSchema(25),
  nMovimento: InteiroNaoNegativoSchema,
  nome: StringComTamanhoSchema(55, 1),
  idTipo: Numero,
  tipo: StringComTamanhoSchema(50, 1),
  qtt: Numero,
  unidade: StringComTamanhoSchema(4),
  lote: StringComTamanhoSchema(4000),
});

const BmOpsPorMalhaSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  op: Numero,
  BmMovimentosLotes: z.array(BmMovimentosLotesSchema).optional(),
});

export const BmMalhasSchema = z.object({
  idBm: NewIdSql,
  ref: StringComTamanhoSchema(18, 1),
  malha: StringComTamanhoSchema(60),
  grupo: StringComTamanhoSchema(3),
  subGrupo: StringComTamanhoSchema(3),
  qtdePedida: Numero,
  qtdeEntrada: Numero,
  qtdeEntradaSeUnidade: Numero.optional(),
  defeitosStock: Numero,
  sobras: Numero,
  unidade: StringComTamanhoSchema(4),
  lote: StringComTamanhoSchema(4000),
  BmOpsPorMalha: z.array(BmOpsPorMalhaSchema).optional(),
  BmMalhasFio,
});

export const BmMalhas = z.array(BmMalhasSchema).optional();

export const BmTcSchema = z.object({
  idBm: NewIdSql,
  nomeTc: StringComTamanhoSchema(100, 1),
});

const BmOpFaturadoSchema = z.object({
  idBm: NewIdSql,
  op: InteiroNaoNegativoSchema,
  nFatutura: InteiroNaoNegativoSchema,
  fData: z.coerce.date({
    error: (issue) =>
      issue.input === undefined
        ? "Tem que inserrir números..."
        : "Formato errado...",
  }),
  dataFatura: StringComTamanhoSchema(10),
  refModelo: StringComTamanhoSchema(50, 1),
  pedido: StringComTamanhoSchema(150),
  qtt: Numero /** cenas e coisas */,
  pesoLiquido: Numero,
  pesoBruto: Numero,
  cmr: StringComTamanhoSchema(150),
  local: StringComTamanhoSchema(150),
  obs: StringComTamanhoSchema(300).nullable(),
});

const BmOpSchema = z.object({
  idBm: NewIdSql,
  op: InteiroNaoNegativoSchema,
  CreatedAt: z.coerce.date({
    error: (issue) =>
      issue.input === undefined
        ? "Tem que inserrir números..."
        : "Formato errado...",
  }),
  foto: z.string(),
  BmOpFaturado: z.array(BmOpFaturadoSchema).optional(),
});

export const BmOp = z.array(BmOpSchema).optional();

export const BmSchema = z.object({
  idBm: NewIdSql,
  composicao: StringComTamanhoSchema(250),
  fechado: z.boolean(),
  BmMalhas,
  BmOp,
  BmTc: z.array(BmTcSchema).optional(),
});

export const BmSchemas = z.array(BmSchema).optional();

export const OPschema = z.object({
  op: NumeroInteiroMaiorQueZero,
});

export type OpDto = z.infer<typeof OPschema>;

export const IdBmBooleanAbreOuFecha = z.object({
  idBm: z.string(),
});
