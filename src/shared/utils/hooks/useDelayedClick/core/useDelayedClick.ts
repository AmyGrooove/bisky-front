import { useEffect, useRef, useState } from 'react'

const useDelayedClick = (callback: () => void, delay = 250) => {
  const [isPressed, setIsPressed] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleDelayedClick = async () => {
    if (isPressed) return

    setIsPressed(true)

    await new Promise<void>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        callback()
        setIsPressed(false)
        timeoutRef.current = null

        resolve()
      }, delay)
    })
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  return { isPressed, handleDelayedClick }
}

export { useDelayedClick }
