import { useCallback, useState } from 'react'

import { IUseTransitionClose } from '../types/IUseTransitionClose'

const useTransitionClose = (props: IUseTransitionClose = {}) => {
  const { closeDelay = 100, isToggleDisabled = false } = props

  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const toggle = useCallback(
    (isOpen: boolean) => {
      if (isToggleDisabled) return

      if (isOpen) {
        setIsOpen(true)
        return
      }

      setIsClosing(true)

      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, closeDelay)
    },
    [closeDelay, isToggleDisabled],
  )

  return { isOpen, isClosing, toggle }
}

export { useTransitionClose }
