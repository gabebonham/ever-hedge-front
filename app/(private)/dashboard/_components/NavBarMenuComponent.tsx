import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { dashboardMenuItemsList } from '@/app/_constants/dashboard-menuitems-list'
import { Button } from '@/components/ui/button'

export function NavBarMenuComponent() {
  const items = dashboardMenuItemsList
  return (
    <Sidebar>
      <SidebarContent className="bg-dark">
        <SidebarGroup>
          <SidebarGroupLabel className="text-md font-bold text-white">
            Acessos Gratuitos
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items
                .filter((i) => i.free)
                .map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <span className="text-xs text-silver">{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md font-bold text-coral">
            Acessos Pagos
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items
                .filter((i) => !i.free)
                .map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <span className="text-xs text-silver ">
                          {item.name}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-dark">
        <Button className="cursor-pointer text-dark bg-gradient-to-br from-coral to-peach hover:to-mainred transition-all duration-200">
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
