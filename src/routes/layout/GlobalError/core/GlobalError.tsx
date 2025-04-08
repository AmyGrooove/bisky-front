import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Button } from '@shared/ui/molecules/Button'
import { Text } from '@shared/ui/atoms/Text'

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
          <Image
            className={st.image}
            src="/images/biskyPleaseCry.png"
            width={170}
            height={170}
            alt="biskyPleaseCry"
          />
          <Button onClick={reset} variant="big" className={st.button}>
            Обновить страницу
          </Button>
          <Button
            onClick={() => redirect('/')}
            variant="big"
            className={st.button}
          >
            На главную
          </Button>
        </div>
      </div>
      <div className={st.empty} />
    </>
  )
}

export { GlobalError }
