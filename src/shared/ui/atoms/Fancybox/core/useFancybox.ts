import { useRef, useEffect } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'

import { IFancyboxProps } from '../types/IFancyboxProps'

const useFancybox = (props: IFancyboxProps) => {
  const { children, className } = props

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, '[data-fancybox]', {
      Carousel: { infinite: false },
    })

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  }, [])

  return { containerRef, children, className }
}

export { useFancybox }
