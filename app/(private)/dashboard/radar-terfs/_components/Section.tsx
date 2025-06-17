'use client'
import { paymentsmock } from '@/app/_models/mocks/payment-mock'
import { RadarTerfsDataTable } from './DataTable'
import { Card } from '@/components/ui/card'
import { terfMock } from '@/app/_models/mocks/terfs-mock'

export default function Section() {
  const items = [
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
    terfMock,
  ]
  return (
    <Card className="px-8 h-fit min-[500px]:w-2/3 bg-maindark max-[500px]:pt-4 max-[500px]:pb-0 max-[500px]:px-0">
      <RadarTerfsDataTable data={items} />
    </Card>
  )
}
