'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SquaresIntersectIcon } from 'lucide-react'
import { useState } from 'react'
interface Props {
  email: string
  setEmail: (value: string) => void
  code: string
  setCode: (value: string) => void
  error: string
  setSection: (value: string) => void
  sendCodeHanlder: Function
  verifyCodeHanlder: Function
  setError: (value: string) => void
}
export default function ForgotPasswordComponent({ props }: { props: Props }) {
  const [isSent, setIsSent] = useState<boolean>(false)
  const {
    email,
    setEmail,
    code,
    setCode,
    error,
    setSection,
    sendCodeHanlder,
    verifyCodeHanlder,
    setError,
  } = props
  return (
    <div className="flex flex-col items-center gap-y-4 w-full ">
      <Input
        placeholder="Email"
        type="text"
        className="text-sm rounded-[4px] border-silver max-w-96 bg-white/20 text-white"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      {isSent ? (
        <div className="space-y-4">
          <Input
            placeholder="Códgio"
            value={code}
            type="text"
            className="text-sm rounded-[4px] border-silver max-w-96 bg-white/20 text-white"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCode(e.target.value)
            }
          />
          <Button
            onClick={() => verifyCodeHanlder()}
            className="cursor-pointer bg-gradient-to-br from-coral to-peach hover:to-mainred transition-all duration-200 w-full max-w-96"
          >
            Confirmar código
          </Button>
        </div>
      ) : (
        <></>
      )}

      <Button
        onClick={() => {
          sendCodeHanlder()
          setIsSent(true)
        }}
        className="cursor-pointer bg-gradient-to-br from-coral to-peach hover:to-mainred transition-all duration-200 w-full max-w-96"
      >
        Enviar código
      </Button>

      <p className="text-mainred">{error}</p>
      <p className="text-sm text-gray-500">
        Já possui registro?{' '}
        <a
          onClick={() => {
            setSection('login')
            setError('')
          }}
          className="text-coral font-bold cursor-pointer"
        >
          Clique aqui para se logar
        </a>
      </p>
      <p className="text-sm text-gray-500">
        Não possui registro?{' '}
        <a
          onClick={() => {
            setSection('signup')
            setError('')
          }}
          className="text-coral font-bold cursor-pointer"
        >
          Clique aqui para se cadastrar
        </a>
      </p>
    </div>
  )
}
