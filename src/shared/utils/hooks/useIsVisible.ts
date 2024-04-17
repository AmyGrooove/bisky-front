import { RefObject, useEffect, useState } from "react"

import { debounce } from "../functions"

const useIsVisible = (ref: RefObject<any>) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const handleScroll = () => {
    if (ref.current) {
      const checkIsRefVisible =
        ref.current.getBoundingClientRect().top < window.innerHeight

      if (checkIsRefVisible && isIntersecting) return
      if (!checkIsRefVisible && !isIntersecting) return

      setIntersecting(checkIsRefVisible)
    }
  }

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll)

    window.addEventListener("scroll", debouncedHandleScroll)

    return () => window.removeEventListener("scroll", debouncedHandleScroll)
  }, [ref, isIntersecting])

  return isIntersecting
}

export { useIsVisible }
