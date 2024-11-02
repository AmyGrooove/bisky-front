"use client"

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { useFancybox } from "./useFancybox"

const Fancybox = (props: any) => {
  const { containerRef } = useFancybox(props)

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  )
}

export { Fancybox }
