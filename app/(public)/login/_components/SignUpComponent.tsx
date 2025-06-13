'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
interface Props {
  username: string
  setUsername: (value: string) => void
  password: string
  setPassword: (value: string) => void
  passwordConfirm: string
  setPasswordConfirm: (value: string) => void
  signUpHandler: Function
  error: string
  setSection: (value: string) => void
  setError: (value: string) => void
}
export default function SignUpComponent({ props }: { props: Props }) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    signUpHandler,
    error,
    setPasswordConfirm,
    passwordConfirm,
    setSection,
    setError,
  } = props
  return (
    <div className="flex flex-col items-center gap-y-4 w-full ">
      <h1 className="text-white text-4xl pb-8">CADASTRO</h1>
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
      <Input
        placeholder="Confirme a senha"
        value={passwordConfirm}
        type="password"
        className="text-sm rounded-md border-silver max-w-96 bg-black/70 text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordConfirm(e.target.value)
        }
      />
      <Button
        onClick={() => signUpHandler()}
        className="cursor-pointer text-black bg-sunset hover:bg-sunset/70 transition-all duration-200 w-full max-w-96"
      >
        Cadastrar
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
          Clique aqui
        </a>
      </p>
    </div>
  )
}
