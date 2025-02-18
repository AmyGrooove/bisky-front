import { useEffect } from 'react'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'

const useDesktopModal = (props: IModalSolutionProps) => {
  const { children, closeFunction, isModalClosing } = props

  const isOpen = children !== null

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight =
        scrollBarWidth > 0 ? `${scrollBarWidth}px` : ''
    } else {
      document.body.style.overflow = ''
      document.body.style.marginRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.marginRight = ''
    }
  }, [isOpen])

  return { children, closeFunction, isModalClosing }
}

export { useDesktopModal }
