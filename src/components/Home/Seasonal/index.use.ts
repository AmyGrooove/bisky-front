import { useEffect, useState } from "react"

const useSeasonal = () => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(imageIndex === 5 ? 0 : imageIndex + 1)
    }, 8000)

    if (document) {
      const container: HTMLElement | null = document.querySelector(
        "#__body > main > section:nth-child(1) > div",
      )

      if (container) {
        container
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [imageIndex])

  return { imageIndex }
}

export default useSeasonal
