import { Suspense } from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail,
} from '@repo/ui/componentspersonalizados/dashboard/sidebar-modificada'
import BotaoHeader from './menus/botao-header'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <BotaoHeader />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Suspense fallback={NavegadorSkeleton(4)}>
          <div>Nav principal</div>
        </Suspense>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <Suspense fallback={NavegadorSkeleton(1)}>
          <div>Nav user pai</div>
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  )
}

function NavegadorSkeleton(length: number) {
  return (
    <SidebarMenu>
      {Array.from({ length }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
