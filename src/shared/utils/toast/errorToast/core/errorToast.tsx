'use client'

import { toast as sonnerToast } from 'sonner'
import { IErrorToastProps } from '../types/IErrorToastProps'
import st from './errorToast.module.scss'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { TriangleAlertIcon } from '@shared/icons'
import { isNil } from '@shared/utils/functions'

const errorToast = (props: IErrorToastProps) => {
  const { message, retryCallback } = props

  const retryCallbackHandler = (id: string | number) => {
    sonnerToast.dismiss(id)

    if (!isNil(retryCallback)) retryCallback()
  }

  return sonnerToast.custom(
    (id) => (
      <div className={st.root}>
        <TriangleAlertIcon className={st.icon} />
        <Text className={st.message}>{message}</Text>
        {!isNil(retryCallback) && (
          <Button
            className={st.button}
            onClick={() => retryCallbackHandler(id)}
          >
            Повторить
          </Button>
        )}
      </div>
    ),
    { duration: 10000 },
  )
}

export { errorToast }
