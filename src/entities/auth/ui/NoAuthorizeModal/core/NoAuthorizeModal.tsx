import { cn, isNil } from '@shared/utils/functions'
import { Divider } from '@shared/ui/atoms/Divider'
import { Text } from '@shared/ui/atoms/Text'
import { closeModal, setAdditionalModal } from '@widgets/ModalWrapper'
import Link from 'next/link'
import { Button } from '@shared/ui/molecules/Button'
import { InfoIcon, KeyRoundIcon, LockIcon, UserIcon } from '@shared/icons'
import { Controller } from 'react-hook-form'
import { PasswordInputField } from '@shared/ui/organisms/PasswordInputField'

import { AuthModal } from '../../AuthModal'
import { INoAuthorizeModalProps } from '../types/INoAuthorizeModalProps'

import { WhatIsTemporaryModal } from './WhatIsTemporaryModal'
import { useNoAuthorizeModal } from './useNoAuthorizeModal'
import st from './NoAuthorizeModal.module.scss'

const NoAuthorizeModal = (props: INoAuthorizeModalProps) => {
  const {
    error,
    sendForm,
    control,
    isDisabledLoginByTemporaryCode,
    createNewProfile,
    processCallback,
  } = useNoAuthorizeModal(props)

  return (
    <div className={st.root}>
      {!isNil(error) && (
        <>
          <Text className={st.error}>{error.message}</Text>
          <Divider />
        </>
      )}
      <div className={st.segment}>
        <Text
          className={cn(st.text, st.link)}
          onClick={() => setAdditionalModal(<WhatIsTemporaryModal />)}
        >
          Что такое временный аккаунт?
        </Text>
        <Button
          className={st.button}
          variant="big"
          Icon={UserIcon}
          onClick={createNewProfile}
        >
          Создать временный аккаунт
        </Button>
        <Text className={cn(st.text, st.littleText)}>
          Создавая аккаунт, вы принимаете{' '}
          <Link
            className={st.link}
            href="/legal/terms"
            onClick={() => closeModal()}
          >
            пользовательское соглашение
          </Link>{' '}
          и{' '}
          <Link
            className={st.link}
            href="/legal/privacy"
            onClick={() => closeModal()}
          >
            политику конфиденциальности
          </Link>
        </Text>
      </div>
      <Divider>или</Divider>
      <div className={st.segment}>
        <Text className={st.text}>
          Через логин и пароль или сервисы Google/Yandex
        </Text>
        <Button
          className={st.button}
          variant="big"
          Icon={LockIcon}
          onClick={() =>
            setAdditionalModal(<AuthModal successCallback={processCallback} />)
          }
        >
          Авторизация
        </Button>
        <Text className={cn(st.text, st.littleText)}>
          Если у вас ещё нет аккаунта, создайте временный — позже вы сможете
          преобразовать его в постоянный
        </Text>
      </div>
      <Divider>или</Divider>
      <div className={st.segment}>
        <Text className={st.text}>
          Через ключ авторизации временного аккаунта
        </Text>
        <Controller
          control={control}
          name="temporaryCode"
          render={({ field, fieldState }) => (
            <PasswordInputField
              {...field}
              className={st.input}
              errorText={fieldState.error?.message}
              placeholder="Ключ авторизации"
            />
          )}
        />
        <Button
          className={st.button}
          variant="big"
          Icon={KeyRoundIcon}
          onClick={sendForm}
          isDisabled={isDisabledLoginByTemporaryCode}
        >
          Войти
        </Button>
      </div>
      <Divider />
      <Link href="/support" className={st.supportLink}>
        <Button
          className={cn(st.button, st.button_support)}
          variant="big"
          Icon={InfoIcon}
          onClick={() => closeModal()}
        >
          Поддержка
        </Button>
      </Link>
    </div>
  )
}

export { NoAuthorizeModal }
