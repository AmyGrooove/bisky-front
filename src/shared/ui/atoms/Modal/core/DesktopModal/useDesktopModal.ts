import { useEffect } from 'react'

import { IModalSolutionProps } from '../../types/IModalSolutionProps'

const useDesktopModal = (props: IModalSolutionProps) => {
  const { children, closeFunction, isModalClosing } = props

  const isOpen = children !== null
  const modalID = isOpen ? 'modal' : undefined

  useEffect(() => {
    const hasModal = document.getElementById('modal') !== null

    if (hasModal) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.marginRight =
        scrollBarWidth > 0 ? `${scrollBarWidth}px` : ''
    } else {
      document.documentElement.style.overflow = ''
      document.documentElement.style.marginRight = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.marginRight = ''
    }
  }, [isOpen])

  return { children, closeFunction, isModalClosing, modalID }
}

export { useDesktopModal }
