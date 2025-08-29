import { useInView } from 'react-intersection-observer'
import { useEffect, useMemo } from 'react'
import { Debouncer } from '@tanstack/pacer'

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

  const debouncer = useMemo(
    () => new Debouncer(onLoadMore, { wait: delay }),
    [onLoadMore, delay],
  )

  useEffect(() => {
    if (isDisabled || isLoading || !inView) return

    debouncer.maybeExecute()

    return () => debouncer.cancel()
  }, [inView, isDisabled, isLoading, debouncer])

  return ref
}

export { useInfiniteScroll }
