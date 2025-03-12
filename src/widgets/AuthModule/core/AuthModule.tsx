import { Text } from '@shared/ui/atoms/Text'
import st from './AuthModule.module.scss'
import { InputField } from '@shared/ui/atoms/InputField'
import { oauthList } from '../static/oauthList'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'

const AuthModule = () => {
  return (
    <div className={st.root}>
      <Text weight="700" className={st.label}>
        Авторизация
      </Text>
      <InputField
        value=""
        onChange={() => {}}
        placeholder="Никнейм"
        isDisabled
        className={st.input}
      />
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
    </div>
  )
}

export { AuthModule }
