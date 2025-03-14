import { InputField } from '@shared/ui/atoms/InputField'
import st from './PasswordAuthTab.module.scss'
import { Controller } from 'react-hook-form'
import { usePasswordAuthTab } from './usePasswordAuthTab'
import { LogoIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { IAuthTabProps } from '../../types/IAuthTabProps'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { Button } from '@shared/ui/molecules/Button'

const PasswordAuthTab = (props: IAuthTabProps) => {
  const { control, isValid, goBack } = usePasswordAuthTab(props)

  return (
    <>
      <SectionLabel onClick={goBack}>Авторизация</SectionLabel>
      В разработке
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: true,
          [st.logo_error]: false,
        })}
      />
      <div className={st.form}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <InputField {...field} className={st.input} placeholder="Никнейм" />
          )}
        />
        <div className={st.inputWrapper}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <InputField
                {...field}
                isAutoFocus
                type="password"
                className={st.input}
                placeholder="••••••••••••"
              />
            )}
          />
          <Button
            className={cn(st.loginButton, { [st.loginButton_active]: isValid })}
            onClick={() => {}}
          >
            Войти
          </Button>
        </div>
      </div>
    </>
  )
}

export { PasswordAuthTab }
