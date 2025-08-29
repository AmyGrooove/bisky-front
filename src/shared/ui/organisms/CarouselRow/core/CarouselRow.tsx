import { Label } from '@shared/ui/molecules/Label'
import { cn, isNil } from '@shared/utils/functions'
import { Carousel } from '@shared/ui/molecules/Carousel'

import { forwardRef, memo } from 'react'
import { ICarouselRowProps } from '../types/ICarouselRowProps'

import st from './CarouselRow.module.scss'
import { useCarouselRow } from './useCarouselRow'

const CarouselRow = memo(
  forwardRef<HTMLDivElement, ICarouselRowProps>((props, ref) => {
    const {
      label,
      linkLabel,
      href,
      className,
      variant,
      carouselProps,
      slidesData,
    } = useCarouselRow(props)

    return (
      <div ref={ref} className={cn(st.root, className, st[`root_${variant}`])}>
        {!isNil(label) && (
          <Label variant={variant} link={{ label: linkLabel, href }}>
            {label}
          </Label>
        )}
        <Carousel
          {...carouselProps}
          slidesData={slidesData}
          variant={variant}
        />
      </div>
    )
  }),
)

CarouselRow.displayName = 'CarouselRow'

export { CarouselRow }
