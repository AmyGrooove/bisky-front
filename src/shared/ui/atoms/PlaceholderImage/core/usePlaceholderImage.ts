import { useEffect, useState, type TransitionEvent } from 'react'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, className, alt = '', sizes } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setIsLoaded(false)
  }

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName === 'opacity') setIsPlaceholderHidden(true)
  }

  useEffect(() => {
    setIsLoaded(false)
    setIsPlaceholderHidden(false)
  }, [src])

  return {
    className,
    isPlaceholderHidden,
    isLoaded,
    src,
    alt,
    handleLoad,
    handleError,
    handleTransitionEnd,
    sizes,
  }
}

export { usePlaceholderImage }
