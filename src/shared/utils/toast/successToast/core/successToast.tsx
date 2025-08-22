import { Toast } from '@shared/ui/molecules/Toast'

import { ISuccessToastToastProps } from '../types/ISuccessToastToastProps'

const successToast = (props: ISuccessToastToastProps) => {
  const { message, Icon } = props

  return Toast({ message, Icon, duration: 10000 })
}

export { successToast }
