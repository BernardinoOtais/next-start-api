import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  // This will automatically be rendered inside the <Outlet /> of _layout.tsx
  return <div className="bg-red-500">Hello "/dashboard/"!</div>
}
