import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { NavBarMenuComponent } from './dashboard/_components/NavBarMenuComponent'
import { dashboardMenuItemsList } from '../_constants/dashboard-menuitems-list'
import { Button } from '@/components/ui/button'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menuItems = dashboardMenuItemsList
  return (
    <main className="w-full h-full bg-dark py-8 px-20 max-[500px]:px-6">
      <h1 className="text-sunset font-bold text-4xl pb-4">Dashboard</h1>
      <p className="text-maingray font-semibold text-lg pb-8">
        Monitore seus dados de mercado e analytics de trading.
      </p>
      <div className="w-full flex items-center justify-around border-1 border-maingray px-1 rounded-lg bg-maindark max-[925px]:overflow-x-auto  ">
        {menuItems.map((menuItem) => (
          <Button className="bg-transparent px-4 hover:bg-gray-300  hover:text-dark text-maingray cursor-pointer my-1">
            {menuItem.name}
          </Button>
        ))}
      </div>
      {children}
    </main>
  )
}
