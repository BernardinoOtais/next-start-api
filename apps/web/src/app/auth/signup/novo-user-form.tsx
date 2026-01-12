"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@repo/authweb/authnext/client";
import {
  CriaUserComValidacaoPasswordDto,
  CriaUserComValidacaoPasswordSchema,
} from "@repo/tipos/auth/user";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@repo/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";

import { Input } from "@repo/ui/components/input";

const NovoUserForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const form = useForm<CriaUserComValidacaoPasswordDto>({
    resolver: zodResolver(CriaUserComValidacaoPasswordSchema),
    defaultValues: {
      nomeUser: "",
      nome: "",
      apelido: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const onSubmit = async (data: CriaUserComValidacaoPasswordDto) => {
    let createdUser = null;
    try {
      const userCriado = await authClient.signUp.email({
        email: data.email,
        name: data.nome,
        password: data.password,
        username: data.nomeUser,
        apelido: data.apelido,
      });

      if (!userCriado.data?.user) {
        toast.error("Erro ao criar user");
        reset();
        return;
      }
      createdUser = userCriado.data.user;

      reset();
    } catch (error) {
      console.error("Erro no processo de criação:", error);

      // If we have a created user but role assignment failed, try to clean up
      if (createdUser) {
        try {
          // You might need to call a tRPC mutation to delete the user
          // await trpc.administrador.deleteUser.mutate({ userId: createdUser.id });
          toast.error(
            "Usuário criado mas erro ao atribuir papéis. Contacte o administrador."
          );
        } catch (cleanupError) {
          console.error("Failed to cleanup user:", cleanupError);
          toast.error(
            "Erro crítico: Usuário criado mas não foi possível atribuir papéis"
          );
        }
      } else {
        toast.error(
          error instanceof Error
            ? `Erro ao criar usuário: ${error.message}`
            : "Erro desconhecido ao criar usuário"
        );
      }

      reset();
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nome.." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apelido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apelido...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Apelido.." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email...</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email.."
                  type="email"
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomeUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="User Name..." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password...</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Password..."
                    type={showPassword ? "text" : "password"}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma Password...</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Confirma Password..."
                    type={showPasswordConfirm ? "text" : "password"}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPasswordConfirm((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "A Criar..." : "Novo Utilizador"}
        </Button>
      </Form>
    </form>
  );
};

export default NovoUserForm;
