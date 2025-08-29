import { SeasonAnimeCard } from '@entities/anime/ui/SeasonAnimeCard'
import { useMemo } from 'react'

import { ISeasonalCarouselProps } from '../types/ISeasonalCarouselProps'

const useSeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { seasonalData, variant = 'big' } = props

  const seasonalCarousel = useMemo(
    () =>
      seasonalData.map((anime) => (
        <SeasonAnimeCard key={anime._id} variant={variant} data={anime} />
      )),
    [seasonalData, variant],
  )

  return { seasonalCarousel, variant }
}

export { useSeasonalCarousel }
