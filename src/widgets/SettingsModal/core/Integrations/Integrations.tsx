import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { cn, isNil } from '@shared/utils/functions'
import Link from 'next/link'

import { integrationList } from '../../static/integrationList'
import { anonymCode } from '../../utils/anonymCode'
import { LoadingSettings } from '../LoadingSettings/LoadingSettings'

import { useIntegrations } from './useIntegrations'
import st from './Integrations.module.scss'

const Integrations = () => {
  const { data, isLoading } = useIntegrations()

  if (isLoading) return <LoadingSettings />

  return (
    <div className={st.root}>
      <Text className={st.text}>
        {`Добавив интеграцию, вы преобразуете временный аккаунт в постоянный.
        Для доступа потребуется вход через интеграцию.
        Интеграции можно объединять между собой или с паролем`}
      </Text>
      {integrationList.map(({ children, id, Icon, href }) =>
        !isNil(data[id]) ? (
          <Button
            className={cn(st.button, st.button_active)}
            Icon={Icon}
            variant="big"
            onClick={() => {}}
            key={id}
            isCustomColor
          >
            {anonymCode(data[id])}
          </Button>
        ) : (
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
        ),
      )}
    </div>
  )
}

export { Integrations }
