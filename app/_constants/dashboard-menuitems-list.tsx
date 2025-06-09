import { Trash } from 'lucide-react'
import Section1Component from '../(private)/dashboard/area-de-assinante/_components/Section1'
import Section2Component from '../(private)/dashboard/radar-calendarios-thl/section2mock/Section2'

export const dashboardMenuItemsList = [
  {
    id: '1',
    name: 'Área de Assinante',
    node: <Section2Component />,
    free: false,
    icon: <Trash />,
    url: '/dashboard/area-de-assinante',
  },
  {
    id: '2',
    node: <Section1Component />,
    name: "Ranking Terf's",
    free: false,
    icon: <Trash />,
    url: '/dashboard/ranking-terfs',
  },
  {
    id: '3',
    node: <Section1Component />,
    name: 'Radar Terf',
    free: true,
    icon: <Trash />,
    url: '/dashboard/radar-terfs',
  },
  {
    id: '4',
    name: 'Radar Calendário/THL',
    free: true,
    node: <Section2Component />,
    icon: <Trash />,
    url: '/dashboard/radar-calendario-thl',
  },
  {
    id: '5',
    name: 'Radar Put',
    free: true,
    node: <Section2Component />,
    icon: <Trash />,
    url: '/dashboard/radar-put',
  },
  {
    id: '6',
    name: 'Radar Call',
    free: true,
    node: <Section2Component />,
    icon: <Trash />,
    url: '/dashboard/radar-call',
  },
]
