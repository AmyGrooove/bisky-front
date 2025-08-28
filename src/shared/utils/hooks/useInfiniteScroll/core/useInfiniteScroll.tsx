import { useDebouncedCallback } from 'use-debounce'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

import { IUseInfiniteScrollProps } from '../types/IUseInfiniteScrollProps'

const useInfiniteScroll = (props: IUseInfiniteScrollProps) => {
  const {
    onLoadMore,
    isLoading = false,
    isDisabled = true,
    delay = 250,
  } = props

  const callbackRef = useRef(onLoadMore)
  callbackRef.current = onLoadMore

  const { ref, inView } = useInView({
    root: null,
    rootMargin: '400px',
    threshold: 0,
    triggerOnce: false,
  })

  const debounced = useDebouncedCallback(() => callbackRef.current(), delay, {
    maxWait: delay * 2,
  })

  useEffect(() => {
    if (!isDisabled || isLoading) return
    if (inView) debounced()

    return () => debounced.cancel()
  }, [inView, isDisabled, isLoading, debounced])

  return ref
}

export { useInfiniteScroll }
