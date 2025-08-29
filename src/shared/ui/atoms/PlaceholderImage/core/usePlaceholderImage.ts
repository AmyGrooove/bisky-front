import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type TransitionEvent,
} from 'react'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const { src, className, alt = '', sizes } = props

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setIsLoaded(false)
  }, [])

  const handleTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName === 'opacity') setIsPlaceholderHidden(true)
    },
    [],
  )

  const sizesAttr = useMemo(
    () => `(max-width: 1024px) ${sizes[1]}px, ${sizes[0]}px`,
    [sizes[0], sizes[1]],
  )

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
    sizesAttr,
  }
}

export { usePlaceholderImage }
