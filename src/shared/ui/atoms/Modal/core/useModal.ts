import { useDelayedClick } from '@shared/utils/hooks/useDelayedClick'
import { useEffect, useState } from 'react'

import { IModalProps } from '../types/IModalProps'

const useModal = (props: IModalProps) => {
  const { closeFunction, children } = props

  const [previousChildren, setPreviousChildren] = useState(children)

  const { isPressed, handleDelayedClick } = useDelayedClick(closeFunction, 200)

  const updateChildren = async () => {
    if (children === null) {
      await handleDelayedClick()
      setPreviousChildren(null)
    } else setPreviousChildren(children)
  }

  useEffect(() => {
    if (children === null && previousChildren === null) return

    void updateChildren()
  }, [children, handleDelayedClick])

  return { isPressed, closeFunction, children: previousChildren }
}

export { useModal }
