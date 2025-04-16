import { Button } from '@shared/ui/molecules/Button'
import { CopyIcon, LogOutIcon, SendIcon, UserXIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { anonymCode } from '@widgets/SettingsModal/utils/anonymCode'
import { Controller } from 'react-hook-form'
import { InputField } from '@shared/ui/atoms/InputField'
import { setAdditionalModal } from '@widgets/ModalWrapper'
import { AuthConfirmationModal } from '@widgets/AuthConfirmationModal'
import { ConfirmationModal } from '@shared/ui/organisms/ConfirmationModal'

import { LoadingSettings } from '../LoadingSettings/LoadingSettings'
import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'

import { useTemporary } from './useTemporary'
import st from './Temporary.module.scss'

const Temporary = (props: ISettingsSectionProps) => {
  const {
    isLoading,
    setActiveTab,
    data,
    control,
    isDisabled,
    copyID,
    sendForm,
    isPending,
    logoutUserFromAccount,
  } = useTemporary(props)

  if (isLoading || isPending) return <LoadingSettings />

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
          setAdditionalModal(<AuthConfirmationModal isIDTextEnabled />)
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
          <Text>{anonymCode(data?.userID ?? '')}</Text>
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
            label="Сменить аккаунт"
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
            setAdditionalModal(
              <ConfirmationModal
                title="Вы уверены, что хотите сменить аккаунт?"
                callBack={sendForm}
              />,
            )
          }
          isDisabled={isDisabled}
        >
          Сменить
        </Button>
      </div>
      <div className={st.separator} />
      <Button
        className={st.button}
        variant="big"
        Icon={UserXIcon}
        onClick={() =>
          setAdditionalModal(
            <ConfirmationModal
              callBack={logoutUserFromAccount}
              yesButtonClassName={st.yesButton}
              title="Вы уверены, что хотите выйти из аккаунта?"
            />,
          )
        }
      >
        Выйти из аккаунта
      </Button>
    </div>
  )
}

export { Temporary }
