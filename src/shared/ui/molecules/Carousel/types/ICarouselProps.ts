import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface ICarouselProps {
  slidesData: ReactNode[]

  skeletonTemplate?: ComponentPropsWithoutRef<typeof Skeleton>['templates']
  variant?: 'big' | 'small'
  className?: string
  carouselProps?: Parameters<typeof useEmblaCarousel>[0]
  carouselPlugins?: Parameters<typeof useEmblaCarousel>[1]
}

export type { ICarouselProps }
