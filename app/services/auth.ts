export async function login(username: string, password: string) {
  // exchange token
  // sets in header cookies
  // return true
  return username == 'user' && password == '123'
}
export async function signup(username: string, password: string) {
  // creates user
  return await login(username, password)
}
export async function sendcode(email: string) {}
export async function verifycode(code: string) {
  return code == '12345'
}
export async function updatepassword(email: string, password: string) {
  return true
}
