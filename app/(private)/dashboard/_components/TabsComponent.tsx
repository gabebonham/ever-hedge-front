import { AppWindowIcon, CodeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DashboardMenuItem } from '@/app/_models/dashboard-menuitem'

export default function TabsComponent({
  dashboardMenuItems,
}: {
  dashboardMenuItems: DashboardMenuItem[]
}) {
  return (
    <div className="flex w-fit  flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="w-full">
          {dashboardMenuItems.map((item, i) => (
            <TabsTrigger key={i} value={item.name}>
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {dashboardMenuItems.map((item, i) => (
          <TabsContent key={i} value={item.name}>
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">{item.node}</CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
