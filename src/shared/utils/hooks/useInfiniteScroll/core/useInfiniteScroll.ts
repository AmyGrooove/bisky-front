import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const useInfiniteScroll = (callback: () => void) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false })

  useEffect(() => {
    if (inView) callback()
  }, [inView, callback])

  return ref
}

export { useInfiniteScroll }
