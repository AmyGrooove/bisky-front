import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type TransitionEvent,
} from 'react'
import { isNil } from '@shared/utils/functions'

import { IPlaceholderImageProps } from '../types/IPlaceholderImageProps'
import { addParam } from '../functions/addParam'

const usePlaceholderImage = (props: IPlaceholderImageProps) => {
  const {
    src,
    className,
    alt = '',
    sizes,
    onClick,
    objectFit = 'cover',
    style,
    version,
  } = props

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

  const resolvedSrc = useMemo(() => {
    if (isNil(src)) return null
    if (version == null) return src

    return addParam(src, 'v', version)
  }, [src, version])

  useEffect(() => {
    setIsLoaded(false)
    setIsPlaceholderHidden(false)
  }, [src, version])

  return {
    className,
    isPlaceholderHidden,
    isLoaded,
    src: resolvedSrc,
    alt,
    handleLoad,
    handleError,
    handleTransitionEnd,
    sizesAttr,
    onClick,
    objectFit,
    style,
  }
}

export { usePlaceholderImage }
