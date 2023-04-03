import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0)

  const mobile = windowSize <= 600
  const laptop = windowSize <= 1000

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { mobile, laptop, windowSize }
}

export default useWindowSize
