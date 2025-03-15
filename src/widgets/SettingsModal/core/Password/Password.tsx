import st from './Password.module.scss'
import { usePassword } from './usePassword'
import { InputField } from '@shared/ui/atoms/InputField'
import { Button } from '@shared/ui/molecules/Button'
import { Controller } from 'react-hook-form'
import { FileIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'
import { LoadingSettings } from '../LoadingSettings/LoadingSettings'

const Password = (props: ISettingsSectionProps) => {
  const {
    isLoading,
    control,
    sendForm,
    isDisabled,
    isOldPasswordEnabled,
    setActiveTab,
    isPending,
  } = usePassword(props)

  if (isLoading || isPending) return <LoadingSettings />

  return (
    <div className={st.root}>
      <Text className={st.text}>
        {`Добавив пароль, вы преобразуете временный аккаунт в постоянный.
        Для доступа к нему потребуется вводить никнейм и пароль.
        Для восстановления пароля понадобится `}
        <strong className={st.link} onClick={() => setActiveTab(2)}>
          привязанная почта
        </strong>
      </Text>
      {isOldPasswordEnabled && (
        <>
          <Controller
            control={control}
            name="oldPassword"
            render={({ field, fieldState }) => (
              <InputField
                {...field}
                type="password"
                value={field.value ?? ''}
                className={st.input}
                label="Текущий пароль"
                errorText={fieldState.error?.message}
                placeholder="••••••••••••"
              />
            )}
          />
          <div className={st.separator} />
        </>
      )}
      <Controller
        control={control}
        name="newPassword"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            type="password"
            className={st.input}
            label="Новый пароль"
            errorText={fieldState.error?.message}
            placeholder="••••••••••••"
          />
        )}
      />
      <Controller
        control={control}
        name="newPasswordAgain"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            type="password"
            className={st.input}
            label="Подтвердить новый пароль"
            errorText={fieldState.error?.message}
            placeholder="••••••••••••"
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
          {!isOldPasswordEnabled ? 'Установить пароль' : 'Поменять пароль'}
        </Button>
      </div>
    </div>
  )
}

export { Password }
