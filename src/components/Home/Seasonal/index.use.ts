import { useEffect, useState } from "react"

import useWindowSize from "@/supportingTool/functions/useWindowSize"

const useSeasonal = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const { laptop } = useWindowSize()

  useEffect(() => {
    if (!laptop) {
      const interval = setInterval(() => {
        setImageIndex(imageIndex === 5 ? 0 : imageIndex + 1)
      }, 8000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [imageIndex])

  return { imageIndex }
}

export default useSeasonal
