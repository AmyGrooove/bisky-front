import { useState, useEffect } from 'react'

import { ISeasonProps } from '../types/ISeasonProps'
import { IMAGE_INTERVAL } from '../static/IMAGE_INTERVAL'

const useSeason = (props: ISeasonProps) => {
  const { data, className = null, isNotActive = false } = props

  const { screenshots, _id } = data

  const [isNextImageShow, setIsNextImageShow] = useState(false)
  const [backgroundImage1, setBackgroundImage1] = useState(0)
  const [backgroundImage2, setBackgroundImage2] = useState(1)

  const animeLink = `/anime/${_id}`
  const genreRow = data.genres.join(' | ')

  const firstBackgroundSrc =
    (data.screenshots?.length === 0
      ? data.poster
      : data.screenshots?.[backgroundImage1]) ?? null

  useEffect(() => {
    if (screenshots.length === 0) return

    const interval = setTimeout(() => {
      if (isNextImageShow)
        setBackgroundImage1((backgroundImage2 + 1) % (screenshots?.length ?? 0))
      else
        setBackgroundImage2((backgroundImage1 + 1) % (screenshots?.length ?? 0))

      setIsNextImageShow((prev) => !prev)
    }, IMAGE_INTERVAL)

    return () => clearTimeout(interval)
  }, [backgroundImage1, backgroundImage2, screenshots.length, isNextImageShow])

  return {
    data,
    className,
    animeLink,
    isNextImageShow,
    backgroundImage2,
    firstBackgroundSrc,
    genreRow,
    isNotActive,
  }
}

export { useSeason }
