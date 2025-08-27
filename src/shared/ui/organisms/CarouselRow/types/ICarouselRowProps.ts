import { ComponentPropsWithoutRef } from 'react'
import { WatchAllCard } from '@shared/ui/molecules/WatchAllCard'
import { Carousel } from '@shared/ui/molecules/Carousel/core/Carousel'

interface ICarouselRowProps {
  carouselProps: ComponentPropsWithoutRef<typeof Carousel>

  label?: string
  link?: {
    label: string
    href?: string
    watchAllType?: ComponentPropsWithoutRef<typeof WatchAllCard>['type']
  }
  variant?: 'big' | 'small'
  className?: string
}

export type { ICarouselRowProps }
