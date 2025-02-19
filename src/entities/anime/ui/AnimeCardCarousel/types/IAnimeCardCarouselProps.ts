import { ComponentProps } from 'react'

import { AnimeCard } from '../../AnimeCard/core/AnimeCard'

interface IAnimeCardCarouselProps {
  data: ComponentProps<typeof AnimeCard>['data'][]

  watchAllHref?: string
}

export type { IAnimeCardCarouselProps }
