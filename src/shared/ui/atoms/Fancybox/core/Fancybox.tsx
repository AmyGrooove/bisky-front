'use client'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { IFancyboxProps } from '../types/IFancyboxProps'

import { useFancybox } from './useFancybox'

const Fancybox = (props: IFancyboxProps) => {
  const { containerRef, children } = useFancybox(props)

  return (
    <div ref={containerRef} className={props.className}>
      {children}
    </div>
  )
}

export { Fancybox }
