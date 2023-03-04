import { useEffect, useState } from 'react'

const useSeasonal = () => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setImageIndex(imageIndex === 5 ? 0 : imageIndex + 1)
    }, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [imageIndex])

  return { imageIndex }
}

export default useSeasonal
