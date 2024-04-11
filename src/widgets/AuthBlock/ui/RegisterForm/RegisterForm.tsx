import { ArrowIcon, BackIcon, LogoIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { IRegisterFormProps } from "@widgets/AuthBlock/types/IRegisterFormProps"
import { Text } from "@shared/ui/atoms"
import { InputField } from "@shared/ui/molecules"

import { useRegisterForm } from "./useRegisterForm"
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
  } = props

  const { isLoading, isError, isCanGoLogin, callCreateNewUser } =
    useRegisterForm(props)

  return (
    <>
      <div className={st.labelWrapper}>
        <ArrowIcon className={st.backIcon} onClick={() => changeAuthForm(0)} />
        <Text size="28" weight="700">
          Регистрация
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
            Логин/почта занята
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
