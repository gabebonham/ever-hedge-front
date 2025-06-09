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
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="space-x-2">
          <span>{row.acao.key}:</span>
          <span className="text-black font-bold">{row.acao.value}</span>
          <span>{row.value.key}:</span>R$:
          <span className="text-black font-bold">{row.value.value}</span>
        </div>
        <div className="space-x-2">
          <span>{row.data.key}:</span>
          <span className="text-black font-bold">
            {formatDate(row.data.value.toString())}
          </span>
        </div>
      </div>
      <Separator />
      <div className="space-x-2">
        <span>{row.vCall.key}:</span>
        <span className="text-black font-bold">{row.vCall.value}</span>
        <span>{row.vCallStk.key}:</span>R$:
        <span className="text-black font-bold">{row.vCallStk.value}</span>
        <span>{row.vCallVc.key}:</span>
        <span className="text-black font-bold">{row.vCallVc.value}</span>
        <span>{row.vCallAmount.key}:</span>R$:
        <span className="text-black font-bold">{row.vCallAmount.value}</span>
      </div>
      <Separator />
      <div className="space-x-2">
        <span>{row.cPut.key}:</span>
        <span className="text-black font-bold">{row.cPut.value}</span>
        <span>{row.cPutStk.key}:</span>R$:
        <span className="text-black font-bold">{row.cPutStk.value}</span>
        <span>{row.cPutVc.key}:</span>
        <span className="text-black font-bold">{row.cPutVc.value}</span>
        <span>{row.cPutAmount.key}:</span>R$:
        <span className="text-black font-bold">{row.cPutAmount.value}</span>
      </div>
      <Separator />
      <div className="space-x-2 flex items-center">
        <span>{row.coef.key}: </span>R$:
        <span className="text-black font-bold">{row.coef.value}</span>
        <span>{row.rent.key}: </span>
        <ArrowDown className="text-red-500 size-5" />
        <span className="text-black font-bold">{row.rent.red.value}%</span>
        <ChevronUp className="text-blue-500" />
        <span className="text-black font-bold">{row.rent.blue.value}%</span>
        <ArrowUp className="text-green-500 size-5" />
        <span className="text-black font-bold">{row.rent.green.value}%</span>
      </div>
      <Separator />
      <div className="flex">
        <div className="space-x-2">
          <span>{row.months.key}:</span>
          <span className="text-black font-bold">{row.months.value}</span>
          <span>{row.CDIPer.key}:</span>
          <span className="text-black font-bold">{row.CDIPer.value}%</span>
          <span>{row.rating.key}:</span>
          <span className="text-black font-bold">{row.rating.value}</span>
          <span>{row.type.key}:</span>
          <span className="text-black font-bold">{row.type.value}</span>
        </div>
      </div>
    </div>
  )
}
