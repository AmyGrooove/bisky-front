import st from './Temporary.module.scss'
import { useTemporary } from './useTemporary'
import { Button } from '@shared/ui/molecules/Button'
import { CopyIcon, LogOutIcon, SendIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'
import { anonymCode } from '@widgets/SettingsModal/utils/anonymCode'
import { Controller } from 'react-hook-form'
import { InputField } from '@shared/ui/atoms/InputField'
import { setAdditionalModal } from '@widgets/ModalWrapper'
import { AuthConfirmationModal } from '@widgets/AuthConfirmationModal'
import { AuthModule } from '@widgets/AuthModule'
import { LoadingSettings } from '../LoadingSettings/LoadingSettings'

const Temporary = (props: ISettingsSectionProps) => {
  const {
    isLoading,
    setActiveTab,
    data,
    control,
    isDisabled,
    copyID,
    sendForm,
  } = useTemporary(props)

  if (isLoading) return <LoadingSettings />

  return (
    <div className={st.root}>
      <Text className={st.text}>
        {`Вы используете временный аккаунт без пароля!
        Для сохранения данных и защиты рекомендуем `}
        <strong className={st.link} onClick={() => setActiveTab(3)}>
          установить пароль
        </strong>
        {` или `}
        <strong className={st.link} onClick={() => setActiveTab(4)}>
          подключить интеграцию
        </strong>
        {`.
        Если у вас уже есть аккаунт, выполните вход`}
      </Text>
      <Button
        className={st.logOutButton}
        variant="big"
        Icon={LogOutIcon}
        onClick={() =>
          setAdditionalModal(
            <AuthConfirmationModal
              callBack={async () => {
                setTimeout(() => setAdditionalModal(<AuthModule />), 210)
              }}
            />,
          )
        }
      >
        Авторизоваться
      </Button>
      <div className={st.separator} />
      <div className={st.copyWrapper} onClick={copyID}>
        <Text isCustomColor className={st.copyLabel}>
          Временный ID
        </Text>
        <div className={st.copy}>
          <Text>{anonymCode(data ?? '')}</Text>
          <CopyIcon className={st.icon} />
        </div>
      </div>
      <Controller
        control={control}
        name="userID"
        render={({ field, fieldState }) => (
          <InputField
            {...field}
            className={st.input}
            label="Сменить пароль"
            errorText={fieldState.error?.message}
            placeholder="ID аккаунта"
          />
        )}
      />
      <div className={st.saveWrapper}>
        <Button
          className={st.button}
          variant="big"
          Icon={SendIcon}
          onClick={() =>
            setAdditionalModal(<AuthConfirmationModal callBack={sendForm} />)
          }
          isDisabled={isDisabled}
        >
          Сменить
        </Button>
      </div>
    </div>
  )
}

export { Temporary }
