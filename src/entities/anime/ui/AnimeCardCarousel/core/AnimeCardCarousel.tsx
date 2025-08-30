import { memo } from 'react'
import { CarouselRow } from '@shared/ui/organisms/CarouselRow'

import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'

import { useAnimeCardCarousel } from './useAnimeCardCarousel'

const AnimeCardCarousel = memo((props: IAnimeCardCarouselProps) => {
  const { animeCarousel, labelProps, variant, className } =
    useAnimeCardCarousel(props)

  return (
    <CarouselRow
      className={className}
      label={labelProps?.label}
      link={labelProps?.link}
      variant={variant}
      carouselProps={{
        slidesData: animeCarousel,
        skeletonTemplate: 'animeCard',
        carouselProps: { dragFree: true },
      }}
    />
  )
})

AnimeCardCarousel.displayName = 'AnimeCardCarousel'

export { AnimeCardCarousel }
