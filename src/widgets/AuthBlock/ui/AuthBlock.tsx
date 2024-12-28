"use client"

import { closeModal } from "@widgets/ModalProvider"

import st from "./AuthBlock.module.scss"
import { StartForm } from "./StartForm/StartForm"
import { LoginForm } from "./LoginForm/LoginForm"
import { RegisterForm } from "./RegisterForm/RegisterForm"
import { useAuthBlock } from "./useAuthBlock"

const AuthBlock = () => {
  const {
    authForm,
    setPassword,
    setAuthForm,
    login,
    setLogin,
    password,
    email,
    setEmail,
  } = useAuthBlock()

  return (
    <div className={st.root}>
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
          closeModal={closeModal}
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
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export { AuthBlock }
