'use client'

import { Input } from '@/components/ui/input'
import Image from 'next/image'
import logo from '@/public/logos/ever-hedge-main-logo.png'
import greenCandle from '@/public/assets/green-candle.png'
import redCandle from '@/public/assets/red-candle.png'
import bubble from '@/public/assets/bubble.png'
import { Button } from '@/components/ui/button'
import { login } from './services/login-service'
import { useState } from 'react'
import { sendcode, signup, verifycode } from '@/app/services/auth'
import { useRouter } from 'next/navigation'
import LoginComponent from './_components/LoginComponent'
import SignUpComponent from './_components/SignUpComponent'
import ForgotPasswordComponent from './_components/ForgotPasswordComponent'
export default function LoginPage() {
  const router = useRouter()
  const [section, setSection] = useState<string>('login')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [error, setError] = useState<string | undefined>()
  const [code, setCode] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const loginHandler = async () => {
    if (!username || !password) {
      setError('Campos não preenchidos.')
      return
    }
    const loginRes = await login(username as string, password as string)
    if (typeof loginRes == 'string') {
      setError(loginRes as string)
      return
    }
    router.push('/dashboard')
  }
  const signUpHandler = async () => {
    if (!username || !password) {
      setError('Campos não preenchidos.')
      return
    }
    if (password != passwordConfirm) {
      setError('Senhas não são iguais.')
      return
    }
    const signUpRes = await signup(username as string, password as string)
    if (typeof signUpRes == 'string') {
      setError(signUpRes as string)
      return
    }
    router.push('/dashboard')
  }
  const sendCodeHanlder = async () => {
    await sendcode(code)
  }
  const verifyCodeHanlder = async () => {
    if (await verifycode(code)) {
      setSection('login')
      setError('')
    } else setError('Código incorreto')
  }
  return (
    <div className="w-full h-screen  ">
      <div className="flex h-full bg-dark">
        <div className="bg-gradient-to-r from-dark to-dark/50 flex justify-center h-full   items-center w-full">
          <div className="w-full max-w-[450px] flex flex-col justify-center h-72 mx-4  py-4 rounded-2xl ">
            <div className="flex flex-col gap-y-8 w-full px-12 items-center ">
              <Image alt="ever-hedge-logo" src={logo} className="w-64" />
              {section == 'login' ? (
                <LoginComponent
                  props={{
                    error: error as string,
                    loginHandler,
                    password,
                    setPassword,
                    setUsername,
                    username,
                    setSection,
                    setError,
                  }}
                />
              ) : section == 'signup' ? (
                <SignUpComponent
                  props={{
                    error: error as string,
                    signUpHandler,
                    password,
                    setPassword,
                    setUsername,
                    username,
                    setSection,
                    passwordConfirm,
                    setPasswordConfirm,
                    setError,
                  }}
                />
              ) : (
                <ForgotPasswordComponent
                  props={{
                    code,
                    email,
                    error: error as string,
                    verifyCodeHanlder,
                    sendCodeHanlder,
                    setCode,
                    setEmail,
                    setSection,
                    setError,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="max-[800px]:hidden w-full bg-gradient-to-br from-coral/20 to-mainred/40 ">
          <div className="w-full flex h-full flex-col">
            <div className="w-full pt-23 pr-24 flex justify-end">
              <Image
                alt="green-candle"
                src={greenCandle}
                className="slideInOut w-12 h-16"
              />
            </div>
            <div className="w-full pt-12 pl-28 flex justify-start">
              <Image
                alt="red-candle"
                src={redCandle}
                className="slideInOut2 w-24 h-32 scale-x-[-1]"
              />
            </div>
            <div className="absolute flex">
              <Image
                alt="bubble"
                src={bubble}
                className="opacity-10 contrast-10 size-36 ml-12 mt-8 slideInOut"
              />
              <Image
                alt="bubble"
                src={bubble}
                className="opacity-20 contrast-10 size-42 mt-96 ml-72 slideInOut2"
              />
            </div>
            <div className="text-center text-5xl text-white px-8 absolute pt-64">
              Suas maiores{' '}
              <span className="text-maingreen font-bold">oportunidades</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
