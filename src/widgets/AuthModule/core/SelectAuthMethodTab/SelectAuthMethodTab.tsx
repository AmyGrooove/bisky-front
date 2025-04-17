import { InputField } from '@shared/ui/atoms/InputField'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { closeAdditionalModal, closeModal } from '@widgets/ModalWrapper'

import { oauthList } from '../../static/oauthList'
import { IAuthTabProps } from '../../types/IAuthTabProps'

import st from './SelectAuthMethodTab.module.scss'
import { useSelectAuthMethodTab } from './useSelectAuthMethodTab'

const SelectAuthMethodTab = (props: IAuthTabProps) => {
  const { control, username, goToPasswordAuth } = useSelectAuthMethodTab(props)

  return (
    <>
      <Text weight="700" className={st.label}>
        Авторизация
      </Text>
      <form className={st.inputWrapper}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <InputField
              {...field}
              isAutoFocus
              className={st.input}
              placeholder="Никнейм"
            />
          )}
        />
        <Button
          isDisabled={username.length < 3}
          className={st.goButton}
          onClick={goToPasswordAuth}
        >
          Войти
        </Button>
        <Controller
          control={control}
          name="password"
          render={({ field }) => <input {...field} hidden type="password" />}
        />
      </form>
      <div className={st.separatorWrapper}>
        <div className={st.separator} />
        <Text>или</Text>
        <div className={st.separator} />
      </div>
      {oauthList.map(({ children, id, Icon, href }) => (
        <Link className={st.button} href={href} key={id}>
          <Button
            className={st.button}
            Icon={Icon}
            variant="big"
            onClick={() => {}}
          >
            {children}
          </Button>
        </Link>
      ))}
      <Text className={st.text}>
        Авторизуясь через сервисы, вы принимаете{' '}
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
    </>
  )
}

export { SelectAuthMethodTab }
