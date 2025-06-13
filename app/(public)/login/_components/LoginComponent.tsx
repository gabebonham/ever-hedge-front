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
      <h1 className="text-white text-4xl pb-8">LOGIN</h1>
      <Input
        placeholder="Usuário"
        type="text"
        className="text-sm rounded-md border-silver max-w-96 bg-black/70 text-white"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <Input
        placeholder="Senha"
        value={password}
        type="password"
        className="text-sm rounded-md border-silver max-w-96 bg-black/70 text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button
        onClick={() => loginHandler()}
        className="cursor-pointer bg-sunset hover:bg-sunset/50 transition-all  text-dark duration-200 w-full max-w-96"
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
          className="text-sunset font-bold cursor-pointer"
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
          className="text-sunset font-bold cursor-pointer"
        >
          Clique aqui
        </a>
      </p>
    </div>
  )
}
