import { useRef, useEffect } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'

import { IFancyboxProps } from '../types/IFancyboxProps'

const useFancybox = (props: IFancyboxProps) => {
  const { delegate = '[data-fancybox]', options = {} } = props

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  }, [delegate, options])

  return { containerRef }
}

export { useFancybox }
