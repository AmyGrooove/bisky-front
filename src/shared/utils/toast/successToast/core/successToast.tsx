'use client'

import { toast as sonnerToast } from 'sonner'
import { Text } from '@shared/ui/atoms/Text'
import { isNil } from '@shared/utils/functions'

import { ISuccessToastToastProps } from '../types/ISuccessToastToastProps'

import st from './successToast.module.scss'

const successToast = (props: ISuccessToastToastProps) => {
  const { message, Icon } = props

  return sonnerToast.custom(() => (
    <div className={st.root}>
      {!isNil(Icon) && Icon({ className: st.icon })}
      <Text className={st.message}>{message}</Text>
    </div>
  ))
}

export { successToast }
