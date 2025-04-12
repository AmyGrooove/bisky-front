import { InputField } from '@shared/ui/atoms/InputField'
import { Controller } from 'react-hook-form'
import { LogoIcon } from '@shared/icons'
import { cn, isNil } from '@shared/utils/functions'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'

import { IAuthTabProps } from '../../types/IAuthTabProps'

import { usePasswordAuthTab } from './usePasswordAuthTab'
import st from './PasswordAuthTab.module.scss'

const PasswordAuthTab = (props: IAuthTabProps) => {
  const { control, isValid, setNewTab, isPending, isError, loginUser, error } =
    usePasswordAuthTab(props)

  return (
    <>
      <SectionLabel onClick={() => setNewTab(0)}>Авторизация</SectionLabel>
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: isPending,
          [st.logo_error]: isError,
        })}
      />
      {!isNil(error?.message) && (
        <Text isCustomColor className={st.error}>
          {error.message}
        </Text>
      )}
      <form className={st.form}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <InputField
              {...field}
              className={st.input}
              inputClassName={st.input_login}
              placeholder="Никнейм"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <InputField
              {...field}
              isAutoFocus
              type="password"
              className={st.input}
              inputClassName={st.input_password}
              placeholder="••••••••••••"
            />
          )}
        />
        <Button
          onClick={loginUser}
          isDisabled={!isValid || isPending}
          className={st.button}
          variant="big"
        >
          Войти
        </Button>
      </form>
      <button onClick={() => setNewTab(2)}>
        <Text weight="700" isCustomColor className={st.reset}>
          Восстановить пароль
        </Text>
      </button>
    </>
  )
}

export { PasswordAuthTab }
