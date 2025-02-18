import { useDelayedClick } from '@shared/utils/hooks/useDelayedClick'

import { IModalProps } from '../types/IModalProps'

const useModal = (props: IModalProps) => {
  const { closeFunction, children } = props

  const { isPressed, handleDelayedClick } = useDelayedClick(closeFunction, 200)

  return { isPressed, handleDelayedClick, children }
}

export { useModal }
