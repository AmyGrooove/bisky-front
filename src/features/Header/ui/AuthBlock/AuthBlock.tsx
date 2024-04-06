"use client"

import { useContext, useState } from "react"

import { Modal } from "@shared/ui/atoms/Modal"
import { ModalContext } from "@appData/mainLayout/ui/ModalProvider"

import st from "./AuthBlock.module.scss"
import { StartForm } from "./StartForm/StartForm"
import { LoginForm } from "./LoginForm/LoginForm"
import { RegisterForm } from "./RegisterForm/RegisterForm"

const AuthBlock = () => {
  const [authForm, setAuthForm] = useState(0)

  const { setModal } = useContext(ModalContext)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  return (
    <Modal className={st.root}>
      {authForm === 0 && (
        <StartForm
          setPassword={setPassword}
          changeAuthForm={setAuthForm}
          login={login}
          setLogin={setLogin}
        />
      )}
      {authForm === 1 && (
        <LoginForm
          changeAuthForm={setAuthForm}
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          closeModal={() => setModal(null)}
        />
      )}
      {authForm === 2 && (
        <RegisterForm
          changeAuthForm={setAuthForm}
          login={login}
          setLogin={setLogin}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          closeModal={() => setModal(null)}
        />
      )}
    </Modal>
  )
}

export { AuthBlock }
