import { useState, useContext } from "react"

import { ModalContext } from "@widgets/ModalProvider"

const useAuthBlock = () => {
  const [authForm, setAuthForm] = useState(0)

  const { closeModal } = useContext(ModalContext)

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
    closeModal,
    email,
    setEmail,
  }
}

export { useAuthBlock }
