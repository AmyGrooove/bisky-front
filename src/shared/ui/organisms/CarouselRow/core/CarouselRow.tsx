import { Label } from '@shared/ui/molecules/Label'
import { cn, isNil } from '@shared/utils/functions'
import { Carousel } from '@shared/ui/molecules/Carousel'

import { ICarouselRowProps } from '../types/ICarouselRowProps'

import st from './CarouselRow.module.scss'
import { useCarouselRow } from './useCarouselRow'

const CarouselRow = (props: ICarouselRowProps) => {
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
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      {!isNil(label) && (
        <Label variant={variant} link={{ label: linkLabel, href }}>
          {label}
        </Label>
      )}
      <Carousel {...carouselProps} slidesData={slidesData} variant={variant} />
    </div>
  )
}

export { CarouselRow }
