import { isNil } from '@shared/utils/functions'
import { useEffect, useRef } from 'react'

import { useDebouncer } from '../../useDebouncer'
import { IUseInViewCallOptions } from '../types/IUseInViewCallOptions'

const useInViewCall = (
  callback: () => void,
  options: IUseInViewCallOptions,
) => {
  const { isDisabled = false, threshold = 0.2, rootMargin = 0, delay } = options

  const inViewRef = useRef<HTMLDivElement | null>(null)
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const { debounceCall } = useDebouncer(callback, 500)

  const stopInterval = () => {
    if (isNil(intervalIdRef.current)) return

    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null
  }

  useEffect(() => {
    const element = inViewRef.current
    if (isNil(element)) return

    const intersectionObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isNil(delay)) {
          if (isIntersecting && !isDisabled) {
            debounceCall()
          }
        } else {
          if (!isDisabled && isIntersecting && !isNil(intervalIdRef.current)) {
            stopInterval()

            return
          }

          stopInterval()
        }
      },
      { root: null, rootMargin: `${rootMargin}px`, threshold },
    )

    intersectionObserver.observe(element)
    return () => {
      intersectionObserver.disconnect()
      stopInterval()
    }
  }, [callback, delay, isDisabled, rootMargin, threshold])

  return { inViewRef }
}

export { useInViewCall }
