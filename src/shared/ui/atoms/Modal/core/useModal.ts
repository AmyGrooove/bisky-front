import { useDelayedClick } from '@shared/utils/hooks/useDelayedClick'
import { useEffect, useState } from 'react'

import { IModalProps } from '../types/IModalProps'

const useModal = (props: IModalProps) => {
  const { closeFunction, children } = props

  const [previousChildren, setPreviousChildren] = useState(children)

  const { isPressed, handleDelayedClick } = useDelayedClick(closeFunction, 200)

  useEffect(() => {
    if (children === null && previousChildren === null) return

    if (children === null)
      handleDelayedClick().then(() => setPreviousChildren(null))
    else setPreviousChildren(children)
  }, [children])

  return { isPressed, closeFunction, children: previousChildren }
}

export { useModal }
