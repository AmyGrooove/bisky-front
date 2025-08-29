import { memo } from 'react'
import { Controller } from 'react-hook-form'
import { LogoIcon } from '@shared/icons'
import { cn, isNil } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'
import { InputField } from '@shared/ui/molecules/InputField'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'

import { IEmailTabProps } from '../../types/IEmailTabProps'

import { useSendToEmailTab } from './useSendToEmailTab'
import st from './SendToEmailTab.module.scss'

const SendToEmailTab = memo((props: IEmailTabProps) => {
  const { control, isValid, setNewTab, isPending, isError, sendReset, error } =
    useSendToEmailTab(props)

  return (
    <>
      <SectionLabel goBackClick={() => setNewTab(1)}>
        Вход через email
      </SectionLabel>
      <LogoIcon
        className={cn(st.logo, {
          [st.logo_loading]: isPending,
          [st.logo_error]: isError,
        })}
      />
      {!isNil(error?.message) && (
        <Text className={st.error}>{error.message}</Text>
      )}
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
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
        Далее
      </Button>
    </>
  )
})

SendToEmailTab.displayName = 'SendToEmailTab'

export { SendToEmailTab }
