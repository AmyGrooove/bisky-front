import { InputField } from '@shared/ui/atoms/InputField'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { oauthList } from '../../static/oauthList'
import Link from 'next/link'
import st from './SelectAuthMethodTab.module.scss'
import { Controller } from 'react-hook-form'
import { useSelectAuthMethodTab } from './useSelectAuthMethodTab'
import { MoveRightIcon } from '@shared/icons'
import { cn } from '@shared/utils/functions'
import { IAuthTabProps } from '../../types/IAuthTabProps'

const SelectAuthMethodTab = (props: IAuthTabProps) => {
  const { control, username, goToPasswordAuth } = useSelectAuthMethodTab(props)

  return (
    <>
      <Text weight="700" className={st.label}>
        Авторизация
      </Text>
      <div className={st.inputWrapper}>
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
        <MoveRightIcon
          className={cn(st.iconMove, {
            [st.iconMove_disabled]: username !== '',
            [st.iconMove_active]: username.length >= 3,
          })}
          onClick={goToPasswordAuth}
        />
      </div>
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
