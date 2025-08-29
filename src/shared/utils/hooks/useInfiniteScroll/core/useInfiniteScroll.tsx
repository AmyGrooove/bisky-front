import { useDebouncedCallback } from 'use-debounce'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import { IUseInfiniteScrollProps } from '../types/IUseInfiniteScrollProps'

const useInfiniteScroll = (props: IUseInfiniteScrollProps) => {
  const {
    onLoadMore,
    isDisabled = false,
    delay = 250,
    isLoading = false,
  } = props

  const { ref, inView } = useInView({
    root: null,
    rootMargin: '200px',
    threshold: 0,
    triggerOnce: false,
  })

  const debounced = useDebouncedCallback(onLoadMore, delay, {
    maxWait: delay * 2,
  })

  useEffect(() => {
    if (isDisabled || isLoading || !inView) return

    debounced()

    return () => debounced.cancel()
  }, [inView, isDisabled, isLoading, debounced])

  return ref
}

export { useInfiniteScroll }
