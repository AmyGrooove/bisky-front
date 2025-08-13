import { useCallback, useEffect, useState } from 'react'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'
import { PLACEHOLDER_DELAY } from '../static/PLACEHOLDER_DELAY'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, className = null, alt = '', sizes } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setIsLoaded(false)
  }, [])

  useEffect(() => {
    setIsLoaded(false)
    setIsPlaceholderHidden(false)
  }, [src])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isLoaded && src)
      timer = setTimeout(() => setIsPlaceholderHidden(true), PLACEHOLDER_DELAY)

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isLoaded, src])

  return {
    className,
    isPlaceholderHidden,
    isLoaded,
    src,
    alt,
    handleLoad,
    handleError,
    sizes,
  }
}

export { usePlaceholderImage }
