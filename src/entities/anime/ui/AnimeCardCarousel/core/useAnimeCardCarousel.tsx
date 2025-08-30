import { useMemo } from 'react'

import { AnimeCard } from '../../AnimeCard/core/AnimeCard'
import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'

const useAnimeCardCarousel = (props: IAnimeCardCarouselProps) => {
  const {
    animesData,
    labelProps,
    variant = 'big',
    className,
    isReleasedStatusHide = true,
  } = props

  const animeCarousel = useMemo(
    () =>
      animesData.map((anime) => (
        <AnimeCard
          key={anime._id}
          isReleasedStatusHide={isReleasedStatusHide}
          variant={variant}
          animeData={anime}
        />
      )),
    [animesData, variant],
  )

  return { animeCarousel, labelProps, variant, className }
}

export { useAnimeCardCarousel }
