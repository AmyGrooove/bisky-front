'use client'

import { Season } from '@entities/anime/ui/Season'
import { cn, getEmptyArray } from '@shared/utils/functions'
import { ChevronLeftIcon, ChevronRightIcon } from '@shared/icons'

import { ISeasonalCarouselProps } from '../../types/ISeasonalCarouselProps'

import st from './SeasonalCarousel.module.scss'
import { useSeasonalCarousel } from './useSeasonalCarousel'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

const SeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const {
    data,
    sliderRef,
    isSliderLoading,
    selectedIndex,
    scrollPrev,
    scrollNext,
  } = useSeasonalCarousel(props)

  if (isSliderLoading)
    return (
      <div className={st.skeleton}>
        {getEmptyArray(3).map((_, index) => (
          <Skeleton
            key={index}
            templates="season"
            className={st.skeletonSlide}
          />
        ))}
      </div>
    )

  return (
    <div className={st.root}>
      <button onClick={scrollPrev} className={cn(st.arrow, st.arrow_left)}>
        <ChevronLeftIcon className={st.arrowIcon} />
      </button>
      <button onClick={scrollNext} className={cn(st.arrow, st.arrow_right)}>
        <ChevronRightIcon className={st.arrowIcon} />
      </button>
      <div ref={sliderRef} className={st.sliderWrapper}>
        <div className={st.slider}>
          {data.map((item, index) => (
            <Season
              key={item._id}
              data={item}
              className={cn(st.slide, {
                [st.slide_active]: selectedIndex === index,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { SeasonalCarousel }
