import { useEffect, useState } from "react"

import { getSrc } from "@/supportingTool/functions"

const useSeasonal = (screenshots: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [errSrc, setErrSrc] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onerror = () => {
      setErrSrc(true)
    }
    img.src = getSrc(screenshots[0], "screenshot")
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % screenshots.length)
    }, 8000)

    return () => clearInterval(intervalId)
  }, [currentIndex, screenshots.length])

  return { currentIndex, errSrc }
}

export default useSeasonal
