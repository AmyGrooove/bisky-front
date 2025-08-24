import { useState, useEffect } from 'react'

import { ISeasonProps } from '../types/ISeasonProps'
import { IMAGE_INTERVAL } from '../static/IMAGE_INTERVAL'

const useSeason = (props: ISeasonProps) => {
  const { data, className, variant = 'big' } = props

  const { screenshots, slug, poster } = data

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const animeLink = `/anime/${slug}`
  const genreRow = data.genres.join(' • ')

  const currentScreenshots = screenshots.length === 0 ? [poster] : screenshots

  useEffect(() => {
    if (currentScreenshots.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentScreenshots.length)
    }, IMAGE_INTERVAL)

    return () => clearInterval(interval)
  }, [currentScreenshots.length])

  return {
    data,
    className,
    animeLink,
    currentImageIndex,
    currentScreenshots,
    genreRow,
    variant,
  }
}

export { useSeason }
