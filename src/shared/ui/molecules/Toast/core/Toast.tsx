import { toast as sonnerToast } from 'sonner'
import { Text } from '@shared/ui/atoms/Text'
import { Button } from '@shared/ui/molecules/Button'
import { isNil } from '@shared/utils/functions'
import { CSSProperties } from 'react'

import { IToastProps } from '../types/IToastProps'

import st from './Toast.module.scss'
import { useToast } from './useToast'

const Toast = (props: IToastProps) => {
  const { message, Icon, duration, styles, handleAction, action } =
    useToast(props)

  return sonnerToast.custom(
    (id) => (
      <div className={st.root} style={styles as CSSProperties}>
        {!isNil(Icon) && <Icon className={st.icon} />}
        <Text className={st.message}>{message}</Text>
        {!isNil(action) && (
          <Button className={st.button} onClick={() => handleAction(id)}>
            {action.text}
          </Button>
        )}
      </div>
    ),
    { duration },
  )
}

export { Toast }
