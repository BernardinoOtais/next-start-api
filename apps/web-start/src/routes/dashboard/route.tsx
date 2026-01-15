import { Outlet, createFileRoute } from '@tanstack/react-router'
import {
  SidebarInset,
  SidebarProvider,
} from '@repo/ui/componentspersonalizados/dashboard/sidebar-modificada'
import { AppSidebar } from '@/components/sidebar/app-sidebar'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  const defaultOpen =
    typeof document !== 'undefined'
      ? document.cookie.includes('sidebar:state=true')
      : false

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <main className="flex grow flex-col gap-2 p-2 pt-0">
          <div className="bg-muted/50 flex grow flex-col rounded-xl">
            {/* THIS IS CRITICAL: The child index.tsx renders here */}
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
