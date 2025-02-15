import { useState, useEffect } from 'react'

import { ISeasonProps } from '../types/ISeasonProps'
import { IMAGE_INTERVAL } from '../static/IMAGE_INTERVAL'

const useSeason = (props: ISeasonProps) => {
  const { data, variant = 'big', className = null } = props

  const { screenshots, _id } = data

  const [isNextImageShow, setIsNextImageShow] = useState(false)
  const [backgroundImage1, setBackgroundImage1] = useState(0)
  const [backgroundImage2, setBackgroundImage2] = useState(1)

  const isBigVariant = variant === 'big'

  const animeLink = `/anime/${_id}`
  const genreRow = data.genres.join(' | ')

  const firstBackgroundSrc =
    (data.screenshots?.length === 0
      ? data.poster
      : data.screenshots?.[backgroundImage1]) ?? null
  const backgroundWidth = isBigVariant ? 1080 : 380
  const backgroundHeight = isBigVariant ? 380 : 180

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
    variant,
    className,
    animeLink,
    isNextImageShow,
    backgroundImage2,
    isBigVariant,
    firstBackgroundSrc,
    backgroundWidth,
    backgroundHeight,
    genreRow,
  }
}

export { useSeason }
