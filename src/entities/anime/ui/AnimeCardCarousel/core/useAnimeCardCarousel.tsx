import { AnimeCard } from '../../AnimeCard/core/AnimeCard'
import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'

const useAnimeCardCarousel = (props: IAnimeCardCarouselProps) => {
  const { animesData, labelProps, variant = 'big' } = props

  const animeCarousel = animesData.map((anime) => (
    <AnimeCard key={anime._id} variant={variant} animeData={anime} />
  ))

  return { animeCarousel, labelProps, variant }
}

export { useAnimeCardCarousel }
