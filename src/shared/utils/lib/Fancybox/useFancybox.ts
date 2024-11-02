import { useRef, useEffect } from "react"
import { Fancybox as NativeFancybox } from "@fancyapps/ui"

const useFancybox = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return { containerRef }
}

export { useFancybox }
