import z from "zod";

export const PAPEL_ROTA_ADMINISTRADOR = "Administrador";

import { InteiroNaoNegativoSchema, VerdadeiroOuFalsoSchema } from "./comum";

export const DadosParaPesquisaComPaginacaoEOrdemSchema = z.object({
  skip: InteiroNaoNegativoSchema,
  take: InteiroNaoNegativoSchema,
  fechado: VerdadeiroOuFalsoSchema,
  ordem: z.enum(["asc", "desc"]).optional(),
});

export type DadosParaPesquisaComPaginacaoEOrdemDto = z.infer<
  typeof DadosParaPesquisaComPaginacaoEOrdemSchema
>;
