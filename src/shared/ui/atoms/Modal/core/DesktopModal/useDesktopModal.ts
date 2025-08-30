import { useEffect, useMemo } from 'react'
import { acquireScrollLock, releaseScrollLock } from '@shared/utils/functions'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'

const useDesktopModal = (props: IModalSolutionProps) => {
  const { children, closeFunction, isModalClosing } = props

  const isOpen = useMemo(() => children !== null, [children])
  const modalID = useMemo(() => (isOpen ? 'modal' : undefined), [isOpen])

  useEffect(() => {
    if (!isOpen) return
    acquireScrollLock()

    return () => {
      releaseScrollLock()
    }
  }, [isOpen])

  return { children, closeFunction, isModalClosing, modalID }
}

export { useDesktopModal }
