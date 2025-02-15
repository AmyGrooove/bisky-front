import { CSSProperties, useCallback, useEffect, useState } from 'react'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'
import { PLACEHOLDER_DELAY } from '../static/PLACEHOLDER_DELAY'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, width, height, className = null, alt = '' } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setIsLoaded(false)
  }, [])

  const containerStyle: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  }

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
    width,
    height,
    isPlaceholderHidden,
    isLoaded,
    src,
    alt,
    handleLoad,
    handleError,
    containerStyle,
  }
}

export { usePlaceholderImage }
