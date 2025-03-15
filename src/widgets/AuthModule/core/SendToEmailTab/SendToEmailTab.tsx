import { InputField } from '@shared/ui/atoms/InputField'
import st from './SendToEmailTab.module.scss'
import { Controller } from 'react-hook-form'
import { useSendToEmailTab } from './useSendToEmailTab'
import { LogoIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { IEmailTabProps } from '../../types/IEmailTabProps'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'

const SendToEmailTab = (props: IEmailTabProps) => {
  const { control, isValid, setNewTab, isPending, isError, sendReset, error } =
    useSendToEmailTab(props)

  return (
    <>
      <SectionLabel onClick={() => setNewTab(1)}>Сброс пароля</SectionLabel>
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
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            isAutoFocus
            className={st.input}
            placeholder="Почта"
            errorText={fieldState.error?.message}
          />
        )}
      />
      <Button
        onClick={sendReset}
        isDisabled={!isValid || isPending}
        className={st.button}
        variant="big"
      >
        Восстановить
      </Button>
    </>
  )
}

export { SendToEmailTab }
