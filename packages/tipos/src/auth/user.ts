import z from "zod";

import { StringComTamanhoSchema } from "@/comum";

export const LoginSchema = z.object({
  nomeUser: StringComTamanhoSchema(15, 1, "Username é obrigatório."),
  password: StringComTamanhoSchema(15, 1, "A password é obrigatória."),
  message: z.string().optional(),
});

export type LoginDto = z.infer<typeof LoginSchema>;

const PasswordValidaSchema = z
  .string()
  .min(8, { message: "Deve ter pelo menos 8 caracteres." })
  .regex(/[a-zA-Z]/, {
    message: "Deve conter pelo menos uma letra.",
  })
  .trim();

export const CriaUserComValidacaoPasswordSchema = z
  .object({
    nomeUser: StringComTamanhoSchema(
      50,
      4,
      "Deve ter pelo menos 4 caracteres.",
      "Não pode ter mais de 50 caracteres."
    ),
    nome: StringComTamanhoSchema(
      50,
      4,
      "Deve ter pelo menos 4 caracteres.",
      "Não pode ter mais de 50 caracteres."
    ),
    apelido: StringComTamanhoSchema(
      50,
      4,
      "Deve ter pelo menos 4 caracteres.",
      "Não pode ter mais de 50 caracteres."
    ),
    email: z.string().check(z.email()),
    password: PasswordValidaSchema,
    confirmPassword: PasswordValidaSchema,
    message: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As Passwords não são iguais.",
    path: ["confirmPassword"],
  });

export type CriaUserComValidacaoPasswordDto = z.infer<
  typeof CriaUserComValidacaoPasswordSchema
>;
