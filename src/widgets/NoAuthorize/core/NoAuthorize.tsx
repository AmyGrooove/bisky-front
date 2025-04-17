import { Button } from '@shared/ui/molecules/Button'
import {
  closeAdditionalModal,
  closeModal,
  setAdditionalModal,
} from '@widgets/ModalWrapper'
import { AuthModule } from '@widgets/AuthModule'
import { InfoIcon, LockIcon, SendIcon, UserIcon } from '@shared/icons'
import { InputField } from '@shared/ui/atoms/InputField'
import { Controller } from 'react-hook-form'
import { Text } from '@shared/ui/atoms/Text'
import { cn, isNil } from '@shared/utils/functions'
import { Support } from '@widgets/Support'
import Link from 'next/link'

import { INoAuthorizeProps } from '../types/INoAuthorizeProps'

import st from './NoAuthorize.module.scss'
import { useNoAuthorize } from './useNoAuthorize'

const NoAuthorize = (props: INoAuthorizeProps) => {
  const {
    createNewProfile,
    processCallback,
    control,
    sendForm,
    isDisabled,
    errorText,
  } = useNoAuthorize(props)

  return (
    <div className={st.root}>
      {!isNil(errorText) && (
        <>
          <Text isCustomColor className={st.error}>
            {errorText.message}
          </Text>
          <div className={st.separator} />
        </>
      )}

      <div className={st.segment}>
        <Text className={st.text}>
          <strong className={st.link} onClick={() => alert('в разработке')}>
            Что такое временный аккаунт?
          </strong>
        </Text>
        <Button variant="big" Icon={UserIcon} onClick={createNewProfile}>
          Создать временный аккаунт
        </Button>
        <Text className={st.littleText}>
          Создавая аккаунт, вы принимаете{' '}
          <Link
            className={st.link}
            href="/legal/terms"
            onClick={() => {
              closeModal()
              closeAdditionalModal()
            }}
          >
            пользовательское соглашение
          </Link>{' '}
          и{' '}
          <Link
            className={st.link}
            href="/legal/privacy"
            onClick={() => {
              closeModal()
              closeAdditionalModal()
            }}
          >
            политику конфиденциальности
          </Link>
        </Text>
      </div>

      <div className={st.separatorWrapper}>
        <div className={st.separator} />
        <Text>или</Text>
        <div className={st.separator} />
      </div>

      <div className={st.segment}>
        <Text className={st.text}>
          Через логин и пароль или сервисы Google/Yandex
        </Text>
        <Button
          variant="big"
          Icon={LockIcon}
          onClick={() =>
            setAdditionalModal(<AuthModule successCallback={processCallback} />)
          }
        >
          Авторизация
        </Button>
      </div>

      <div className={st.separatorWrapper}>
        <div className={st.separator} />
        <Text>или</Text>
        <div className={st.separator} />
      </div>

      <div className={st.segment}>
        <Text className={st.text}>Через ID пользователя</Text>
        <Controller
          control={control}
          name="userID"
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              className={st.input}
              errorText={fieldState.error?.message}
              placeholder="ID аккаунта"
            />
          )}
        />
        <Button
          className={st.button}
          variant="big"
          Icon={SendIcon}
          onClick={sendForm}
          isDisabled={isDisabled}
        >
          Войти
        </Button>
      </div>

      <div className={st.separator} />

      <Button
        isCustomColor
        className={cn(st.button, st.button_support)}
        variant="big"
        Icon={InfoIcon}
        onClick={() => setAdditionalModal(<Support />)}
      >
        Поддержка
      </Button>
    </div>
  )
}

export { NoAuthorize }
