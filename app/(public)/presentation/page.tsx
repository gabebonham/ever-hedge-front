'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from '@/components/ui/carousel'
import React from 'react'
import SpeculativeStrategies from './content/SpeculativeStrategies'
import bg from '@/public/assets/graph-up.jpg'
import ConcervativeStrategies from './content/ConservativeStrategies.tsx'
import FinancialMarket from './content/FinancialMarket'
import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import { useRouter } from 'next/navigation'
export default function PresentationPage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const router = useRouter()
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  const loginHandler = async () => {
    router.push('/login')
  }
  return (
    <section
      style={{
        backgroundImage: `url(/assets/${
          current === 3
            ? 'bg-blue.png'
            : current == 2
            ? 'graph-fade.png'
            : 'graph-colored.png'
        })`,
      }}
      className="hue-rotate-200 bg-size-[100%_100%] bg-no-repeat h-full w-full p-0 m-0"
    >
      <Carousel
        setApi={setApi}
        className="w-full h-screen p-0 m-0 bg-black/40 hue-rotate-165"
      >
        <Button
          className="bg-sunset z-10 fixed right-2 mt-4 w-24 text-black cursor-pointer hover:bg-sunset/80 min-[500px]:mr-12"
          onClick={() => loginHandler()}
        >
          LOGIN
        </Button>
        <CarouselContent className="w-full h-screen p-0 m-0 ">
          <CarouselItem>
            <FinancialMarket setCurrent={api} />
          </CarouselItem>
          <CarouselItem>
            <ConcervativeStrategies setCurrent={api} />
          </CarouselItem>
          <CarouselItem>
            <SpeculativeStrategies setCurrent={api} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
