'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ConcervativeStrategies({
  setCurrent,
}: {
  setCurrent: any
}) {
  const router = useRouter()
  const goToHandler = () => {
    router.push('#')
  }
  const nextHandler = () => {
    setCurrent.scrollTo(2)
  }
  return (
    <section className="w-full h-full space-y-8 pt-16 pr-4 justify-self-center min-[500px]:w-96">
      <h1 className="text-white text-5xl text-center">
        Estrategias Conservadoras
      </h1>
      <h3 className="text-white text-center text-2xl">
        Abordagens de negociação de opções de baixo risco baseadas na
        preservação de capital.
      </h3>
      <div className=" h-full w-full flex flex-col gap-y-4 pt-36">
        <Button
          className="bg-sunset text-black cursor-pointer hover:bg-sunset/80 max-[500px]:hidden"
          onClick={() => nextHandler()}
        >
          Próximo
        </Button>
        <Button
          className="bg-sunset text-black cursor-pointer hover:bg-sunset/80"
          onClick={() => goToHandler()}
        >
          Ver Mais
        </Button>
      </div>
    </section>
  )
}
