'use client'

import Image from 'next/image'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'

import st from './Unauthorized.module.scss'

const Unauthorized = () => {
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
          <Image
            className={st.image}
            src="/images/biskyHi.png"
            width={170}
            height={170}
            alt="biskyHi"
          />
          <Button variant="big" className={st.button}>
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
