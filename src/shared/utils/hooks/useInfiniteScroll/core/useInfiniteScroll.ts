import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDebouncedCallback } from 'use-debounce'

const useInfiniteScroll = (callback: () => void, delay = 300) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false })
  const debouncedCallback = useDebouncedCallback(callback, delay)

  useEffect(() => {
    if (!inView) return

    const interval = setInterval(() => {
      debouncedCallback()
    }, delay)

    return () => clearInterval(interval)
  }, [inView, debouncedCallback, delay])

  return ref
}

export { useInfiniteScroll }
