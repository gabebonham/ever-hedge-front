'use client'

import RadarTerfsCaption from './_components/Caption'
import Section from './_components/Section'

export default function DashboardPage() {
  return (
    <section className="w-full flex justify-center pt-4 gap-x-4 max-[500px]:flex-col max-[500px]:gap-y-20">
      <div className=" h-72 min-[500px]:w-1/3">
        <h1 className="text-sunset text-2xl pb-2">Legenda</h1>
        <RadarTerfsCaption />
      </div>
      <Section />
    </section>
  )
}
