import { InputField } from '@shared/ui/atoms/InputField'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { oauthList } from '../../static/oauthList'
import Link from 'next/link'
import st from './SelectAuthMethodTab.module.scss'
import { Controller } from 'react-hook-form'
import { useSelectAuthMethodTab } from './useSelectAuthMethodTab'
import { IAuthTabProps } from '../../types/IAuthTabProps'

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
      <div className={st.separator} />
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
    </>
  )
}

export { SelectAuthMethodTab }
