import { useEffect, useRef, useState } from 'react'

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

  const getRating = (score: number) => {
    switch (true) {
    case score >= 7:
      return 'score_high'
    case score >= 5:
      return 'score_meduim'
    default:
      return 'score_low'
    }
  }

  return { getRating, imageIndex }
}

export default useSeasonal
