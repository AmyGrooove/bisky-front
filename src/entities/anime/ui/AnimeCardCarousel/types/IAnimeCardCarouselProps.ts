import { CarouselRow } from '@shared/ui/organisms/CarouselRow'
import { ComponentPropsWithoutRef } from 'react'

import { AnimeCard } from '../../AnimeCard/core/AnimeCard'

interface ILabelProps {
  label?: ComponentPropsWithoutRef<typeof CarouselRow>['label']
  link?: ComponentPropsWithoutRef<typeof CarouselRow>['link']
}

interface IAnimeCardCarouselProps {
  animesData: ComponentPropsWithoutRef<typeof AnimeCard>['animeData'][]

  labelProps?: ILabelProps
  variant?: 'big' | 'small'
}

export type { IAnimeCardCarouselProps }
