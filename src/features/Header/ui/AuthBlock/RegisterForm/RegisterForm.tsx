import { signIn } from "next-auth/react"

import { ArrowIcon, BackIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms/Text"
import { InputField } from "@shared/ui/molecules/InputField"
import { cn } from "@shared/utils/functions"
import { IRegisterFormProps } from "@features/Header/types/IRegisterFormProps"
import { createNewUser } from "@entities/Auth"

import st from "./RegisterForm.module.scss"

const RegisterForm = (props: IRegisterFormProps) => {
  const {
    changeAuthForm,
    login,
    setLogin,
    email,
    setEmail,
    password,
    setPassword,
    closeModal,
  } = props

  const isCanGoLogin = login.length >= 3 && password.length >= 6

  const callCreateNewUser = async () => {
    await createNewUser({ username: login, password, email })

    const result = await signIn("credentials", {
      redirect: false,
      username: login,
      password,
    })

    if (result?.status === 200) closeModal()
  }

  return (
    <>
      <div className={st.labelWrapper}>
        <ArrowIcon className={st.backIcon} onClick={() => changeAuthForm(0)} />
        <Text size="28" weight="700">
          Регистрация
        </Text>
      </div>
      <div>
        <div className={st.inputWrapper}>
          <InputField
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            label="Логин"
            onKeyDown={(event) =>
              event.key === "Enter" && isCanGoLogin ? callCreateNewUser() : {}
            }
            className={cn(st.input, st.input_login)}
          />
        </div>
        <div className={st.inputWrapper}>
          <InputField
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Почта"
            type="email"
            onKeyDown={(event) =>
              event.key === "Enter" && isCanGoLogin ? callCreateNewUser() : {}
            }
            className={cn(st.input, st.input_email)}
          />
        </div>
        <div className={st.inputWrapper}>
          <InputField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Пароль"
            type="password"
            className={cn(st.input, st.input_password)}
            onKeyDown={(event) =>
              event.key === "Enter" && isCanGoLogin ? callCreateNewUser() : {}
            }
          />
          <BackIcon
            className={cn(st.inputButton, {
              [st.inputButton_hide]: !isCanGoLogin,
            })}
            onClick={() => (isCanGoLogin ? callCreateNewUser() : {})}
          />
        </div>
      </div>
    </>
  )
}

export { RegisterForm }
