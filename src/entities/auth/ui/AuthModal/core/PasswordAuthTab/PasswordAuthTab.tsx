import { Controller } from 'react-hook-form'
import { LogoIcon } from '@shared/icons'
import { cn, isNil } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'
import { InputField } from '@shared/ui/molecules/InputField'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'

import { IAuthTabProps } from '../../types/IAuthTabProps'

import { usePasswordAuthTab } from './usePasswordAuthTab'
import st from './PasswordAuthTab.module.scss'

const PasswordAuthTab = (props: IAuthTabProps) => {
  const {
    control,
    isValid,
    setNewTab,
    isPending,
    isError,
    loginUser,
    error,
    errors,
  } = usePasswordAuthTab(props)

  return (
    <>
      <SectionLabel goBackClick={() => setNewTab(0)}>Авторизация</SectionLabel>
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: isPending,
          [st.logo_error]: isError,
        })}
      />
      {!isNil(error?.message) && (
        <Text className={st.error}>{error.message}</Text>
      )}
      <form className={st.form}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <InputField
              {...field}
              className={st.input}
              inputClassName={cn(st.input, st.input_login)}
              placeholder="Имя аккаунта"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <InputField
              {...field}
              type="password"
              className={st.input}
              inputClassName={cn(st.input, st.input_password)}
              placeholder="Пароль"
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
      {(!isNil(errors.password) || !isNil(errors.username)) && (
        <Text className={st.error}>
          {errors.username?.message ?? errors.password?.message}
        </Text>
      )}
      <button onClick={() => setNewTab(2)}>
        <Text weight="700" className={st.reset}>
          Войти через email
        </Text>
      </button>
    </>
  )
}

export { PasswordAuthTab }
