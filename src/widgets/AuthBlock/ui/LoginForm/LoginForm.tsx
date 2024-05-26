import { ArrowIcon, BackIcon, LogoIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { ILoginFormProps } from "@widgets/AuthBlock/types/ILoginFormProps"
import { Text } from "@shared/ui/atoms"
import { InputField } from "@shared/ui/molecules"

import st from "./LoginForm.module.scss"
import { useLoginForm } from "./useLoginForm"

const LoginForm = (props: ILoginFormProps) => {
  const { changeAuthForm, login, setLogin, password, setPassword } = props

  const { isLoading, isError, isCanGoLogin, callLoginUser } =
    useLoginForm(props)

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
      <Text
        isDefaultColor={false}
        className={cn(st.changeModalLabel, st.changeModalLabel_disabled)}
      >
        Сбросить пароль
      </Text>
    </>
  )
}

export { LoginForm }
