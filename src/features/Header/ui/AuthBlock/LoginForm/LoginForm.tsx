import { signIn } from "next-auth/react"
import { useState } from "react"

import { ArrowIcon, BackIcon, LogoIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms/Text"
import { InputField } from "@shared/ui/molecules/InputField"
import { cn } from "@shared/utils/functions"
import { ILoginFormProps } from "@features/Header/types/ILoginFormProps"

import st from "./LoginForm.module.scss"

const LoginForm = (props: ILoginFormProps) => {
  const { changeAuthForm, login, setLogin, password, setPassword, closeModal } =
    props

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const isCanGoLogin = login.length >= 3 && password.length >= 6

  const callLoginUser = async () => {
    setIsError(false)
    setIsLoading(true)

    const result = await signIn("credentials", {
      redirect: false,
      username: login,
      password,
    })

    if (result?.status === 200) closeModal()
    else setIsError(true)

    setIsLoading(false)
  }

  return (
    <>
      <div className={st.labelWrapper}>
        <ArrowIcon className={st.backIcon} onClick={() => changeAuthForm(0)} />
        <Text size="28" weight="700">
          Авторизация
        </Text>
      </div>
      <div className={st.logoWrapper}>
        <LogoIcon
          className={cn(st.logoIcon, {
            [st.logoIcon_loading]: isLoading,
            [st.logoIcon_error]: isError,
          })}
          isDefaultFill={false}
        />
        {isError && (
          <Text className={st.errorText} isDefaultColor>
            Неверный логин/пароль
          </Text>
        )}
      </div>
      <div>
        <div className={st.inputWrapper}>
          <InputField
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            label="Логин"
            onKeyDown={(event) =>
              event.key === "Enter" && isCanGoLogin ? callLoginUser() : {}
            }
            className={cn(st.input, st.input_login)}
          />
        </div>
        <div className={st.inputWrapper}>
          <InputField
            autoFocus
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Пароль"
            type="password"
            className={cn(st.input, st.input_password)}
            onKeyDown={(event) =>
              event.key === "Enter" && isCanGoLogin ? callLoginUser() : {}
            }
          />
          <BackIcon
            className={cn(st.inputButton, {
              [st.inputButton_hide]: !isCanGoLogin,
            })}
            onClick={() => (isCanGoLogin ? callLoginUser() : {})}
          />
        </div>
      </div>
      <Text isDefaultColor={false} className={st.changeModalLabel}>
        Сбросить пароль
      </Text>
    </>
  )
}

export { LoginForm }
