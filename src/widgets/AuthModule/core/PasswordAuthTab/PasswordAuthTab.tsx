import { InputField } from '@shared/ui/atoms/InputField'
import st from './PasswordAuthTab.module.scss'
import { Controller } from 'react-hook-form'
import { usePasswordAuthTab } from './usePasswordAuthTab'
import { LogoIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { IAuthTabProps } from '../../types/IAuthTabProps'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'

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
      {error?.message && (
        <Text isCustomColor className={st.error}>
          {error.message}
        </Text>
      )}
      <div className={st.form}>
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
      </div>
      <button onClick={() => setNewTab(2)}>
        <Text weight="700" isCustomColor className={st.reset}>
          Восстановить пароль
        </Text>
      </button>
    </>
  )
}

export { PasswordAuthTab }
