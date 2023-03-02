import { useEffect, useState } from 'react'

const useSeasonal = () => {
  const [currentScreen, setCurrentScreen] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      if (currentScreen !== 5) {
        setCurrentScreen(currentScreen + 1)
      } else {
        setCurrentScreen(0)
      }
    }, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [currentScreen])

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

  return { getRating, currentScreen }
}

export default useSeasonal
