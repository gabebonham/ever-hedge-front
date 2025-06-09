'use client'
import { paymentsmock } from '@/app/_models/mocks/payment-mock'
import { DataTableSection1Mock } from './Section1DataTable'
import { Card } from '@/components/ui/card'
import { terfMock } from '@/app/_models/mocks/terfs-mock'

export default function Section1Component() {
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
    <Card className="px-8 h-fit w-2/3">
      <DataTableSection1Mock data={items} />
    </Card>
  )
}
