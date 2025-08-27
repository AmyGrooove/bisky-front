import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { InputField } from '@shared/ui/molecules/InputField'
import { Divider } from '@shared/ui/atoms/Divider'

import { IAuthTabProps } from '../../types/IAuthTabProps'
import { OAUTH_LIST } from '../../static/OAUTH_LIST'

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
              className={st.input}
              placeholder="Имя аккаунта"
            />
          )}
        />
        <Button
          isDisabled={username.length < 3}
          className={st.button}
          variant="big"
          onClick={goToPasswordAuth}
        >
          Войти через пароль
        </Button>
        <Controller
          control={control}
          name="password"
          render={({ field }) => <input {...field} hidden type="password" />}
        />
      </form>
      <Divider />
      {OAUTH_LIST.map(({ children, id, Icon, href }) => (
        <Link className={st.buttonWrapper} href={href} key={id}>
          <Button className={st.button} Icon={Icon} variant="big">
            {children}
          </Button>
        </Link>
      ))}
    </>
  )
}

export { SelectAuthMethodTab }
