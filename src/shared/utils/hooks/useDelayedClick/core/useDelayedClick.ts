'use client'

import { useCallback, useState } from 'react'

const useDelayedClick = (callback: () => void, delay = 250) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleDelayedClick = useCallback(() => {
    setIsPressed(true)

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        callback()
        setIsPressed(false)

        resolve()
      }, delay)
    })
  }, [callback, delay])

  return { isPressed, handleDelayedClick }
}

export { useDelayedClick }
