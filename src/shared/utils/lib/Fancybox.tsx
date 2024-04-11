"use client"

import { useRef, useEffect } from "react"
import { Fancybox as NativeFancybox } from "@fancyapps/ui"

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { cn } from "@shared/utils/functions"

const Fancybox = (props: any) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    const delegate = props.delegate || "[data-fancybox]"
    const options = props.options || {}

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return (
    <div ref={containerRef} className={cn(props.className)}>
      {props.children}
    </div>
  )
}

export { Fancybox }
