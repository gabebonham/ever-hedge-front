'use client'

import React from 'react'
import { DataTableSection2Mock } from './Section2DataTable'
import { paymentsmock } from '@/app/_models/mocks/payment-mock'

export default function Section2Component() {
  const items = paymentsmock
  return (
    <div>
      <DataTableSection2Mock data={items} />
    </div>
  )
}
