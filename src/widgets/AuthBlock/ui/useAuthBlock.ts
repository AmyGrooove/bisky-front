import { useState } from "react"

const useAuthBlock = () => {
  const [authForm, setAuthForm] = useState(0)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  return {
    authForm,
    setPassword,
    setAuthForm,
    login,
    setLogin,
    password,
    email,
    setEmail,
  }
}

export { useAuthBlock }
