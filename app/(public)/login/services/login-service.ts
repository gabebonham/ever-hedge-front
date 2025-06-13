'use service'

import { permanentRedirect, redirect } from 'next/navigation'

export async function login(username: string, password: string) {
  // axios call
  // set token
  // faz redirect
  if (username == 'user' && password == '123') {
    permanentRedirect('/dashboard')
  } else return 'Erro ao fazer login'
}
