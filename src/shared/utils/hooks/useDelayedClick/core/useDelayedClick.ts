'use client'

import { useCallback, useState } from 'react'

const useDelayedClick = (callback: () => void, delay = 250) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleDelayedClick = useCallback(() => {
    setIsPressed(true)

    setTimeout(() => {
      callback()
      setIsPressed(false)
    }, delay)
  }, [callback, delay])

  return { isPressed, handleDelayedClick }
}

export { useDelayedClick }
