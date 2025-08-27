import { isNil } from '@shared/utils/functions'
import { WatchAllCard } from '@shared/ui/molecules/WatchAllCard'
import Link from 'next/link'

import { ICarouselRowProps } from '../types/ICarouselRowProps'

const useCarouselRow = (props: ICarouselRowProps) => {
  const { label, link, className, variant = 'big', carouselProps } = props
  const { label: linkLabel = '', href = '#', watchAllType } = link ?? {}

  const slidesData = [
    ...carouselProps.slidesData,
    ...(!isNil(watchAllType)
      ? [
          <Link href={href}>
            <WatchAllCard type={watchAllType} label={linkLabel} />
          </Link>,
        ]
      : []),
  ]

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
