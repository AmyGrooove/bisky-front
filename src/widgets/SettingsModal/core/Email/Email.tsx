import st from './Email.module.scss'
import { InputField } from '@shared/ui/atoms/InputField'
import { Button } from '@shared/ui/molecules/Button'
import { Controller } from 'react-hook-form'
import { FileIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { useEmail } from './useEmail'
import { LoadingSettings } from '../LoadingSettings/LoadingSettings'

const Email = () => {
  const { isLoading, control, sendForm, isDisabled } = useEmail()

  if (isLoading) return <LoadingSettings />

  return (
    <div className={st.root}>
      <Text className={st.text}>
        Укажите электронную почту для уведомлений и восстановления аккаунта
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            value={field.value ?? ''}
            className={st.input}
            label="Почта"
            errorText={fieldState.error?.message}
            placeholder="email@bisky.one"
          />
        )}
      />
      <div className={st.saveWrapper}>
        <Button
          className={st.button}
          variant="big"
          Icon={FileIcon}
          onClick={sendForm}
          isDisabled={isDisabled}
        >
          Сохранить
        </Button>
      </div>
    </div>
  )
}

export { Email }
