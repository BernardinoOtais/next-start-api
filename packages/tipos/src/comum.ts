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
