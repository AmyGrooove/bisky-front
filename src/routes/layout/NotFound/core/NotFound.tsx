'use client'

import Image from 'next/image'
import { redirect } from 'next/navigation'

import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'

import st from './NotFound.module.scss'


const NotFound = () => {
  return (
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
        <Image
          className={st.image}
          src="/images/biskyTea.png"
          width={170}
          height={170}
          alt="biskyTea"
        />
        <Button
          onClick={() => redirect('/')}
          variant="big"
          className={st.button}
        >
          На главную
        </Button>
      </div>
    </div>
  )
}

export { NotFound }
