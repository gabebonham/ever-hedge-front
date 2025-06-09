import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { NavBarMenuComponent } from './dashboard/_components/NavBarMenuComponent'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className="w-full h-screen bg-gradient-to-br from-dark to-dark/70  ">
      <NavBarMenuComponent />
      <main className=" w-full">
        <SidebarTrigger className="text-white hover:bg-transparent hover:text-mainred cursor-pointer" />
        {children}
      </main>
    </SidebarProvider>
  )
}
