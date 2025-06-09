'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SquaresIntersectIcon } from 'lucide-react'
interface Props {
  username: string
  setUsername: (value: string) => void
  password: string
  setPassword: (value: string) => void
  loginHandler: Function
  error: string
  setSection: (value: string) => void
  setError: (value: string) => void
}
export default function LoginComponent({ props }: { props: Props }) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loginHandler,
    error,
    setSection,
    setError,
  } = props
  return (
    <div className="flex flex-col items-center gap-y-4 w-full ">
      <Input
        placeholder="Usuário"
        type="text"
        className="text-sm rounded-[4px] border-silver max-w-96 bg-white/20 text-white"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <Input
        placeholder="Senha"
        value={password}
        type="password"
        className="text-sm rounded-[4px] border-silver max-w-96 bg-white/20 text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button
        onClick={() => loginHandler()}
        className="cursor-pointer bg-gradient-to-br from-coral to-peach hover:to-mainred transition-all duration-200 w-full max-w-96"
      >
        Login
      </Button>
      <p className="text-mainred">{error}</p>
      <p className="text-sm text-gray-500">
        Esqueceu a senha?{' '}
        <a
          onClick={() => {
            setSection('forgotpassword')
            setError('')
          }}
          className="text-coral font-bold cursor-pointer"
        >
          Clique aqui
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
