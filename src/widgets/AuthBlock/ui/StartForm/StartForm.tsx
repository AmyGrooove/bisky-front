import { useEffect } from "react"

import { cn } from "@shared/utils/functions"
import { BackIcon, GoogleIcon, ShikimoriIcon, VkIcon } from "@shared/icons"
import { InputField } from "@shared/ui/molecules"
import { IStartFormProps } from "@widgets/AuthBlock/types/IStartFormProps"
import { Text } from "@shared/ui/atoms"

import st from "./StartForm.module.scss"

const StartForm = (props: IStartFormProps) => {
  const { changeAuthForm, login, setLogin, setPassword } = props

  useEffect(() => {
    setPassword("")
  }, [])

  return (
    <>
      <div className={st.labelWrapper}>
        <Text size="28" weight="700">
          Авторизация
        </Text>
      </div>
      <div>
        <div className={st.inputWrapper}>
          <InputField
            autoFocus
            label="Логин"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            onKeyDown={(event) =>
              event.key === "Enter" && login.length >= 3
                ? changeAuthForm(1)
                : {}
            }
          />
          <BackIcon
            className={cn(st.inputButton, {
              [st.inputButton_hide]: login.length < 3,
            })}
            onClick={() => (login.length >= 3 ? changeAuthForm(1) : {})}
          />
        </div>
      </div>
      <div className={st.otherWays}>
        <GoogleIcon
          className={cn(st.waysButton, { [st.waysButton_disabled]: true })}
        />
        <VkIcon
          className={cn(st.waysButton, { [st.waysButton_disabled]: true })}
        />
        <ShikimoriIcon
          className={cn(st.waysButton, { [st.waysButton_disabled]: true })}
        />
      </div>
      <Text
        isDefaultColor={false}
        className={st.changeModalLabel}
        onClick={() => changeAuthForm(2)}
      >
        Зарегистрироваться
      </Text>
    </>
  )
}

export { StartForm }
