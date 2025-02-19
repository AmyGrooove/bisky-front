'use client'

import { cn, getEmptyArray } from '@shared/utils/functions'
import { ChevronLeftIcon, ChevronRightIcon } from '@shared/icons'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'
import { AnimeCard } from '../../AnimeCard/core/AnimeCard'
import { WatchAllCard } from '../../WatchAllCard'

import st from './AnimeCardCarousel.module.scss'
import { useAnimeCardCarousel } from './useAnimeCardCarousel'

const AnimeCardCarousel = (props: IAnimeCardCarouselProps) => {
  const {
    data,
    sliderRef,
    currentSlide,
    instanceRef,
    isSliderLoading,
    isLastSlide,
    watchAllHref,
  } = useAnimeCardCarousel(props)

  if (isSliderLoading)
    return (
      <div className={st.skeleton}>
        {getEmptyArray(10).map((_, index) => (
          <Skeleton key={index} templates="animeCard" />
        ))}
      </div>
    )

  return (
    <div className={st.root}>
      <button
        onClick={() => instanceRef.current?.prev()}
        className={cn(st.arrow, st.arrow_left, {
          [st.arrow_active]: currentSlide !== 0,
        })}
      >
        <ChevronLeftIcon className={st.arrowIcon} />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={cn(st.arrow, st.arrow_right, {
          [st.arrow_active]: !isLastSlide,
        })}
      >
        <ChevronRightIcon className={st.arrowIcon} />
      </button>
      <div ref={sliderRef} className={cn(st.slider, 'keen-slider')}>
        {data.map((item) => (
          <AnimeCard
            key={item._id}
            data={item}
            className={cn(st.slide, 'keen-slider__slide')}
          />
        ))}
        {watchAllHref && (
          <WatchAllCard
            href={watchAllHref}
            className={cn(st.slide, 'keen-slider__slide')}
          />
        )}
        <div className={cn(st.slideEmpty, 'keen-slider__slide')} />
      </div>
    </div>
  )
}

export { AnimeCardCarousel }
