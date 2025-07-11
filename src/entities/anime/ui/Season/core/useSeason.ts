import { useState, useEffect } from 'react'

import { ISeasonProps } from '../types/ISeasonProps'
import { IMAGE_INTERVAL } from '../static/IMAGE_INTERVAL'

const useSeason = (props: ISeasonProps) => {
  const { data, className = null, isNotActive = false } = props

  const { screenshots, _id, poster } = data

  const [currentImageID, setCurrentImageID] = useState(0)

  const animeLink = `/anime/${_id}`
  const genreRow = data.genres.join(' | ')

  const currentScreenshots = screenshots.length === 0 ? [poster] : screenshots

  useEffect(() => {
    if (screenshots.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageID((prev) =>
        prev + 1 >= screenshots.length ? 0 : prev + 1,
      )
    }, IMAGE_INTERVAL)

    return () => clearTimeout(interval)
  }, [screenshots.length])

  return {
    data,
    className,
    animeLink,
    currentImageID,
    currentScreenshots,
    genreRow,
    isNotActive,
  }
}

export { useSeason }
