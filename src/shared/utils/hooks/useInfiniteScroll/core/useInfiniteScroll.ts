import { RefObject, useEffect } from 'react'

const useInfiniteScroll = (
  callback: () => void,
  triggerRef: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 1.0 },
) => {
  useEffect(() => {
    const currentElement = triggerRef.current
    if (!currentElement) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) callback()
    }, options)

    observer.observe(currentElement)

    return () => {
      observer.unobserve(currentElement)
    }
  }, [callback, triggerRef, options])
}

export { useInfiniteScroll }
