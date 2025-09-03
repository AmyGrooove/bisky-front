'use client'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { IFancyboxProps } from '../types/IFancyboxProps'

import { useFancybox } from './useFancybox'

const Fancybox = (props: IFancyboxProps) => {
  const { containerRef, children, className } = useFancybox(props)

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export { Fancybox }
