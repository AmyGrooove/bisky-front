import { TriangleAlertIcon } from '@shared/icons'
import { isNil } from '@shared/utils/functions'
import { Toast } from '@shared/ui/molecules/Toast'

import { IErrorToastProps } from '../types/IErrorToastProps'

const errorToast = (props: IErrorToastProps) => {
  const { message, retryCallback } = props

  return Toast({
    message,
    Icon: TriangleAlertIcon,
    action: isNil(retryCallback)
      ? undefined
      : { text: 'Повторить', callback: retryCallback },
    duration: 10000,
    styles: {
      '--toast-border-color': 'var(--red)',
      '--toast-icon-color': 'var(--red)',
    },
  })
}

export { errorToast }
