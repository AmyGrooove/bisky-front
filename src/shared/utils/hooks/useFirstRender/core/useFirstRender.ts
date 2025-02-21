import { useEffect, useRef } from 'react'

const useFirstRender = () => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    }
  }, [])

  return isFirstRender.current
}

export { useFirstRender }
