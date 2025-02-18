'use client'

import { Season } from '@entities/anime/ui/Season'
import { cn, getEmptyArray } from '@shared/utils/functions'
import { ChevronLeftIcon, ChevronRightIcon } from '@shared/icons'

import { ISeasonalCarouselProps } from '../../types/ISeasonalCarouselProps'

import st from './SeasonalCarousel.module.scss'
import { useSeasonalCarousel } from './useSeasonalCarousel'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

const SeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { data, sliderRef, currentSlide, instanceRef, isSliderLoading } =
    useSeasonalCarousel(props)

  if (isSliderLoading)
    return (
      <div className={st.season}>
        {getEmptyArray(3).map((_, index) => (
          <Skeleton key={index} templates="season" />
        ))}
      </div>
    )

  return (
    <div className={st.root}>
      <button
        onClick={() => instanceRef.current?.prev()}
        className={cn(st.arrow, st.arrow_left)}
      >
        <ChevronLeftIcon className={st.arrowIcon} />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={cn(st.arrow, st.arrow_right)}
      >
        <ChevronRightIcon className={st.arrowIcon} />
      </button>
      <div ref={sliderRef} className={cn(st.slider, 'keen-slider')}>
        {data.map((item, index) => (
          <Season
            key={item._id}
            data={item}
            className={cn(st.slide, 'keen-slider__slide')}
            isNotActive={currentSlide !== index}
          />
        ))}
      </div>
    </div>
  )
}

export { SeasonalCarousel }
