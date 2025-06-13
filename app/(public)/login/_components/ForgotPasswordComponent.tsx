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
      <h1 className="text-white text-4xl pb-8 text-center">RECUPERAR SENHA</h1>
      <Input
        placeholder="Email"
        type="text"
        className="text-sm rounded-md border-silver max-w-96 bg-black/70 text-white"
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
            className="text-sm rounded-md border-silver max-w-96 bg-black/70 text-white"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCode(e.target.value)
            }
          />
          <Button
            onClick={() => verifyCodeHanlder()}
            className="cursor-pointer bg-sunset text-black hover:bg-sunset/70 transition-all duration-200 w-full max-w-96"
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
        className="cursor-pointer text-black bg-sunset hover:bg-sunset/70 transition-all duration-200 w-full max-w-96"
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
          className="text-sunset font-bold cursor-pointer"
        >
          Clique aqui para logar
        </a>
      </p>
      <p className="text-sm text-gray-500">
        Não possui registro?{' '}
        <a
          onClick={() => {
            setSection('signup')
            setError('')
          }}
          className="text-sunset font-bold cursor-pointer"
        >
          Clique aqui para se cadastrar
        </a>
      </p>
    </div>
  )
}
