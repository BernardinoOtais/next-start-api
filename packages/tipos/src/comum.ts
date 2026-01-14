import z from "zod";

export const StringComTamanhoSchema = (
  tamanho: number,
  minimo?: number,
  textoMinimo?: string,
  textoMaximo?: string
) => {
  let schema = z.string().max(tamanho, {
    message: textoMaximo || `Tem que ter no máximo ${tamanho} caracteres...`,
  });

  if (typeof minimo === "number") {
    schema = schema.min(minimo, {
      message: textoMinimo || `Mínimo ${minimo} caracteres`,
    });
  }
  return schema;
};

export const InteiroNaoNegativoSchema = z.coerce
  .number({
    error: (issue) =>
      issue.input === undefined
        ? "Tem que inserrir números..."
        : "Formato errado...",
  })
  .int({ message: "Tem que ser inteiro...." })
  .nonnegative({ message: "Tem que ser positivo..." }) as z.ZodNumber;

export const VerdadeiroOuFalsoSchema = z
  .union([z.boolean(), z.string()])
  .transform((val) => {
    if (typeof val === "boolean") return val;
    if (val === "true") return true;
    if (val === "false") return false;
    throw new Error("Invalid boolean value");
  });

export const NewIdSql = z.uuid();

export const NumeroInteiroMaiorQueZero = z.coerce
  .number({
    error: (issue) =>
      issue.input === undefined
        ? "Tem que inserrir números..."
        : "Formato errado...",
  })
  .int({ message: "Tem que ser inteiro...." })
  .min(1, { message: "Tem que ser maior que zero..." }) as z.ZodNumber;

export const FotoPropSchema = z.object({
  id: z.string().min(1),
});
