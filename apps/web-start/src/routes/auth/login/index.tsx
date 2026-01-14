import { zodResolver } from '@hookform/resolvers/zod'
import { authClient } from '@repo/authweb/authstart/client'
import { LoginSchema } from '@repo/tipos/auth/user'
import { Alert, AlertTitle } from '@repo/ui/components/alert'
import { Button } from '@repo/ui/components/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form'
import { Input } from '@repo/ui/components/input'
import { OctagonAlertIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createFileRoute } from '@tanstack/react-router'

import type { LoginDto } from '@repo/tipos/auth/user'
import { ModeToggle } from '@/components/utils/mode-toggle'

export const Route = createFileRoute('/auth/login/')({
  validateSearch: (search: Record<string, unknown>) => ({
    callbackUrl:
      typeof search.callbackUrl === 'string' ? search.callbackUrl : undefined,
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { callbackUrl } = Route.useSearch()
  const redirectTo = callbackUrl || '/'

  const [errorT, setError] = useState<string | null>(null)

  const form = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      nomeUser: '',
      password: '',
    },
  })

  const { errors, isSubmitting } = form.formState

  const onSubmit = async (data: LoginDto) => {
    setError(null)

    await authClient.signIn.username(
      {
        username: data.nomeUser,
        password: data.password,
      },
      {
        onSuccess: () => {
          console.log('Login', redirectTo)
          window.location.href = redirectTo
        },
        onError: ({ error }) => {
          console.log('O tais error :', error.message)
          setError(error.message)
        },
      },
    )
  }

  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-lg p-8 shadow-lg">
      <div className="flex w-full justify-end">
        <ModeToggle />
      </div>
      <div className="bg-image h-32.5 w-full bg-contain bg-center bg-no-repeat" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          {errors.message && (
            <FormMessage className="text-red-500">
              {errors.message.message}
            </FormMessage>
          )}

          <FormField
            control={form.control}
            name="nomeUser"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Utilizador...</FormLabel>
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
                  <Input {...field} placeholder="Password..." type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!!errorT && (
            <Alert className="bg-destructive/10 border-none">
              <OctagonAlertIcon className="h-4 w-4 text-destructive!" />
              <AlertTitle>{errorT}</AlertTitle>
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Login...' : 'Login'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
