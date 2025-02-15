import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { IFancyboxProps } from '../types/IFancyboxProps'

import { useFancybox } from './useFancybox'

const Fancybox = (props: IFancyboxProps) => {
  const { containerRef } = useFancybox(props)

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  )
}

export { Fancybox }
