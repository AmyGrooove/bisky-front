import { CarouselRow } from '@shared/ui/organisms/CarouselRow'

import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'

import { useAnimeCardCarousel } from './useAnimeCardCarousel'

const AnimeCardCarousel = (props: IAnimeCardCarouselProps) => {
  const { animeCarousel, labelProps, variant } = useAnimeCardCarousel(props)

  return (
    <CarouselRow
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
}

export { AnimeCardCarousel }
