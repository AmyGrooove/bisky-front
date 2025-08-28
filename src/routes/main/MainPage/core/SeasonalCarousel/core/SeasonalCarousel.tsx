'use client'

import { Carousel } from '@shared/ui/molecules/Carousel'
import Autoplay from 'embla-carousel-autoplay'

import { ISeasonalCarouselProps } from '../types/ISeasonalCarouselProps'

import { useSeasonalCarousel } from './useSeasonalCarousel'

const SeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { seasonalCarousel, variant } = useSeasonalCarousel(props)

  return (
    <Carousel
      variant={variant}
      skeletonTemplate="seasonalAnimeCard"
      slidesData={seasonalCarousel}
      carouselProps={{ loop: true, align: 'center' }}
      carouselPlugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
    />
  )
}

export { SeasonalCarousel }
