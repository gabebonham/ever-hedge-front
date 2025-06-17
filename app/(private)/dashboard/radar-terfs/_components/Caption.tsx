'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ArrowDown, ArrowUp, ChevronUp, Divide } from 'lucide-react'
import React from 'react'

export default function RadarTerfsCaption() {
  const items = [
    {
      name: 'Ação',
      description: 'Informa o código da ação de Referencia',
    },
    {
      name: 'Valor',
      description:
        'Informa o Valor de referencia da Ação no momento de busca do radar',
    },
    {
      name: 'Data',
      description: 'Informa a data de busca do radar',
    },
    {
      name: 'V Call',
      description: 'Informa o código de Venda da Opção Call',
    },
    {
      name: 'C Put',
      description: 'Informa o código de Compra da Opção Put',
    },
    {
      name: 'Stk',
      description: 'Informa o valor de strike da Opção',
    },
    {
      name: 'Vc.',
      description: 'Informa a data de vencimento da Opção',
    },
    {
      name: '$',
      description: 'Informa o valor negociado da Opção',
    },
    {
      name: 'Coef.',
      description:
        'Informa o coeficiente Total da estrutura de Terf. Ex: Compra da Ação + Compra da Put - Venda da Call.',
    },
    {
      name: 'Rent.',
      description:
        'Informa a rentabilidade em diferentes cenários para o vencimento da opção curta.',
    },
    {
      name: 'Meses',
      description: 'Informa o número de meses até o venc. da Put',
    },
    {
      name: 'CDI per.',
      description: 'Informa o cdi do período até o venc. da Put',
    },
    {
      name: 'Rating',
      description:
        'Informa a Classificação da Estrutura sendo, * - Boa, ** - Muito Boa, *** - Excelente',
    },
    {
      name: 'Tipo',
      description: 'Informa a contra-parte de Put.',
    },
  ]
  return (
    <ScrollArea className="h-72 w-full text-xs rounded-md border bg-maindark text-white">
      <div className="p-4">
        {items.map((i) => (
          <div>
            <div className=" flex items-center gap-x-4">
              <span>{i.name}:</span>
              <p className="word-break w-3/4 text-maingray">{i.description}</p>
              {i.name == 'Rent.' && (
                <div className="flex flex-col w-full">
                  <div className="flex items-center">
                    <ArrowUp className="text-green-500 size-5" />
                    <span className="text-maingray">Cenário de Alta</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronUp className="text-blue-500" />
                    <span className="text-maingray">Lateralização</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowDown className="text-red-500 size-5" />
                    <span className="text-maingray">Cenário de Queda</span>
                  </div>
                </div>
              )}
              {i.name == 'Tipo' && (
                <div className="flex flex-col w-full text-maingray">
                  <div className="word-break flex items-center gap-x-2">
                    <p className="">U:</p>
                    <p>Último negócio</p>
                  </div>
                  <div className="word-break flex items-center gap-x-2">
                    <p>B:</p>
                    <p>Book</p>
                  </div>
                </div>
              )}
            </div>
            <Separator className="my-2 bg-maingray/50 text-maingray/50" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
