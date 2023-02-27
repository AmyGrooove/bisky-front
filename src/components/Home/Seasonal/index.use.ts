import { useEffect, useState } from 'react'

import { getRandomValue } from '@/supportingTool/functions'

const useSeasonal = () => {
  const [currentScreen, setCurrentScreen] = useState(getRandomValue(4))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen(getRandomValue(4))
    }, 8000)

    return () => clearInterval(timer)
  }, [])

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
