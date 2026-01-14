import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: AuthLayout,
})
function AuthLayout() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Outlet />
    </div>
  )
}
