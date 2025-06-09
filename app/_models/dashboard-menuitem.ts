import React from 'react'

export type DashboardMenuItem = {
  id: string
  name: string
  node: React.ReactNode
  icon: React.ReactNode
  free: boolean
  url: string
}
