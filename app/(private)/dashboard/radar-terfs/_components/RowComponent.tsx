'use client'
import { Terfs } from '@/app/_models/terfs'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, ArrowUp, ChevronUp } from 'lucide-react'

export default function RowComponentTerfs({ row }: { row: Terfs }) {
  function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    const day = date.getDate()
    const month = date.getMonth() + 1 // getMonth() returns 0-indexed month
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }
  return (
    <div className="space-y-2 bg-maingray/10 rounded-lg p-2 max-[500px]:text-xs">
      <div className="flex justify-between">
        <div className="space-x-2 min-[500px]:space-x-8 flex">
          <div className="flex gap-x-2">
            <span>{row.acao.key}:</span>
            <span className="text-white min-[500px]:font-bold">
              {row.acao.value}
            </span>
          </div>
          <div className="flex gap-x-2">
            <span>{row.value.key}:</span>R$:
            <span className="text-white min-[500px]:font-bold">
              {row.value.value}
            </span>
          </div>
        </div>
        <div className="space-x-2">
          <span>{row.data.key}:</span>
          <span className="text-white min-[500px]:font-bold">
            {formatDate(row.data.value.toString())}
          </span>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className=" space-x-2 min-[500px]:space-x-8 flex">
        <div className="flex gap-x-2">
          <span>{row.vCall.key}:</span>
          <span className="text-white min-[500px]:font-bold">
            {row.vCall.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.vCallStk.key}:</span>R$:
          <span className="text-white min-[500px]:font-bold">
            {row.vCallStk.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.vCallVc.key}:</span>
          <span className="text-white min-[500px]:font-bold">
            {row.vCallVc.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.vCallAmount.key}:</span>R$:
          <span className="text-white min-[500px]:font-bold">
            {row.vCallAmount.value}
          </span>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className=" space-x-2 min-[500px]:space-x-8 flex">
        <div className="flex gap-x-2">
          <span>{row.cPut.key}:</span>
          <span className="text-white min-[500px]:font-bold">
            {row.cPut.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.cPutStk.key}:</span>R$:
          <span className="text-white min-[500px]:font-bold">
            {row.cPutStk.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.cPutVc.key}:</span>
          <span className="text-white min-[500px]:font-bold">
            {row.cPutVc.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.cPutAmount.key}:</span>R$:
          <span className="text-white min-[500px]:font-bold">
            {row.cPutAmount.value}
          </span>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className="space-x-2 flex items-center">
        <div className="flex gap-x-2 min-[500px]:gap-x-8">
          <span>{row.coef.key}: </span>R$:
          <span className="text-white min-[500px]:font-bold">
            {row.coef.value}
          </span>
        </div>
        <div className="flex gap-x-2">
          <span>{row.rent.key}: </span>
          <div className="flex gap-x-2">
            <ArrowDown className="text-red-500 size-5" />
            <span className="text-white min-[500px]:font-bold">
              {row.rent.red.value}%
            </span>
          </div>
          <div className="flex gap-x-2">
            <ChevronUp className="text-blue-500" />
            <span className="text-white min-[500px]:font-bold">
              {row.rent.blue.value}%
            </span>
          </div>
          <div className="flex gap-x-2">
            <ArrowUp className="text-green-500 size-5" />
            <span className="text-white min-[500px]:font-bold">
              {row.rent.green.value}%
            </span>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className="flex">
        <div className="space-x-2 min-[500px]:space-x-8 flex">
          <div className="flex gap-x-2">
            <span>{row.months.key}:</span>
            <span className="text-white min-[500px]:font-bold">
              {row.months.value}
            </span>
          </div>
          <div className="flex gap-x-2">
            <span>{row.CDIPer.key}:</span>
            <span className="text-white min-[500px]:font-bold">
              {row.CDIPer.value}%
            </span>
          </div>
          <div className="flex gap-x-2">
            <span>{row.rating.key}:</span>
            <span className="text-white min-[500px]:font-bold">
              {row.rating.value}
            </span>
          </div>
          <div className="flex gap-x-2">
            <span>{row.type.key}:</span>
            <span className="text-white min-[500px]:font-bold">
              {row.type.value}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
