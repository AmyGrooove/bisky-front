import { isNil } from '@shared/utils/functions'
import { WatchAllCard } from '@shared/ui/molecules/WatchAllCard'
import Link from 'next/link'
import { useMemo } from 'react'

import { ICarouselRowProps } from '../types/ICarouselRowProps'

const useCarouselRow = (props: ICarouselRowProps) => {
  const { label, link, className, variant = 'big', carouselProps } = props
  const {
    label: linkLabel = '',
    href = '#',
    watchAllType,
    isWatchListDisabled = false,
  } = link ?? {}

  const slidesData = useMemo(() => {
    const extra = !isNil(watchAllType) && !isWatchListDisabled
      ? [
          <Link key="watch-all" href={href}>
            <WatchAllCard type={watchAllType} label={linkLabel} />
          </Link>,
        ]
      : []

    return [...carouselProps.slidesData, ...extra]
  }, [
    carouselProps.slidesData,
    href,
    linkLabel,
    watchAllType,
    isWatchListDisabled,
  ])

  return {
    label,
    linkLabel,
    href,
    className,
    variant,
    carouselProps,
    slidesData,
  }
}

export { useCarouselRow }
