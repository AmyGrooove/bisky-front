import { useState, useEffect } from "react"

import { ISeasonProps } from "../types/ISeasonProps"

const useSeason = (props: ISeasonProps) => {
  const {
    anime: { screenshots },
  } = props

  const [isNextImageShow, setIsNextImageShow] = useState(false)
  const [backgroundImage1, setBackgroundImage1] = useState(0)
  const [backgroundImage2, setBackgroundImage2] = useState(1)

  useEffect(() => {
    if (screenshots?.length === 0) return

    const interval = setTimeout(() => {
      if (isNextImageShow)
        setBackgroundImage1((backgroundImage2 + 1) % (screenshots?.length ?? 0))
      else
        setBackgroundImage2((backgroundImage1 + 1) % (screenshots?.length ?? 0))

      setIsNextImageShow((prev) => !prev)
    }, 10000)

    return () => clearTimeout(interval)
  }, [backgroundImage1, backgroundImage2, screenshots?.length, isNextImageShow])

  return { isNextImageShow, backgroundImage1, backgroundImage2 }
}

export { useSeason }
