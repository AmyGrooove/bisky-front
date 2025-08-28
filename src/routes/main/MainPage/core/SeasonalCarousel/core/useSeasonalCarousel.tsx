import { SeasonAnimeCard } from '@entities/anime/ui/SeasonAnimeCard'

import { ISeasonalCarouselProps } from '../types/ISeasonalCarouselProps'

const useSeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { seasonalData, variant = 'big' } = props

  const seasonalCarousel = seasonalData.map((anime) => (
    <SeasonAnimeCard key={anime._id} variant={variant} data={anime} />
  ))

  return { seasonalCarousel, variant }
}

export { useSeasonalCarousel }
