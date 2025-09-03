'use client'

import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import Link from 'next/link'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'

import st from './NotFound.module.scss'

const NotFound = () => {
  return (
    <>
      <div className={st.root}>
        <div className={st.errorBlock}>
          <div className={st.label}>
            <Text className={st.labelText} weight="700">
              Ошибка
            </Text>
            <Text className={st.labelCode} weight="700">
              404
            </Text>
          </div>
          <Text className={st.description}>Страница не найдена</Text>
          <PlaceholderImage
            className={st.image}
            src="/images/biskyTea.png"
            sizes={[170, 170]}
            alt="biskyTea"
          />
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

export { NotFound }
