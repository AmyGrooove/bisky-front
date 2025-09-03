'use client'

import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'

import st from './Unauthorized.module.scss'
import { useUnauthorized } from './useUnauthorized'

const Unauthorized = () => {
  const { authorizeAndRefresh } = useUnauthorized()

  return (
    <>
      <div className={st.root}>
        <div className={st.errorBlock}>
          <div className={st.label}>
            <Text className={st.labelText} weight="700">
              Ошибка
            </Text>
            <Text className={st.labelCode} weight="700">
              401
            </Text>
          </div>
          <Text className={st.description}>Требуется авторизация</Text>
          <PlaceholderImage
            className={st.image}
            src="/images/biskyHi.png"
            sizes={[170, 170]}
            alt="biskyHi"
          />
          <Button
            onClick={authorizeAndRefresh}
            variant="big"
            className={st.button}
          >
            Авторизоваться
          </Button>
          <Link href="/" className={st.buttonLink}>
            <Button variant="big" className={st.button}>
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export { Unauthorized }
