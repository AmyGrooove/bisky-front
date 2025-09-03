'use client'

import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'
import Link from 'next/link'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'

import { IGlobalError } from '../types/IGlobalErrorProps'

import st from './GlobalError.module.scss'
import { useGlobalError } from './useGlobalError'

const GlobalError = (props: IGlobalError) => {
  const { reset, errorText } = useGlobalError(props)

  return (
    <>
      <div className={st.root}>
        <div className={st.errorBlock}>
          <div className={st.label}>
            <Text className={st.labelText} weight="700">
              Ошибка
            </Text>
            <Text className={st.labelCode} weight="700">
              500
            </Text>
          </div>
          <Text className={st.description}>{errorText}</Text>
          <PlaceholderImage
            className={st.image}
            src="/images/biskyPleaseCry.png"
            sizes={[170, 170]}
            alt="biskyPleaseCry"
          />
          <Link href="/support" className={st.buttonLink}>
            <Button variant="big" className={st.button}>
              Сообщить о проблеме
            </Button>
          </Link>
          <Button onClick={reset} variant="big" className={st.button}>
            Обновить страницу
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

export { GlobalError }
