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
    scrollPrev,
    scrollNext,
    isSliderLoading,
    watchAllHref,
    isCanScrollPrev,
    isCanScrollNext,
  } = useAnimeCardCarousel(props)

  if (isSliderLoading)
    return (
      <div className={st.skeleton}>
        {getEmptyArray(12).map((_, index) => (
          <Skeleton key={index} templates="animeCard" />
        ))}
      </div>
    )

  return (
    <div className={st.root}>
      <button
        onClick={scrollPrev}
        className={cn(st.arrow, st.arrow_left, {
          [st.arrow_active]: isCanScrollPrev,
        })}
      >
        <ChevronLeftIcon className={st.arrowIcon} />
      </button>
      <button
        onClick={scrollNext}
        className={cn(st.arrow, st.arrow_right, {
          [st.arrow_active]: isCanScrollNext,
        })}
      >
        <ChevronRightIcon className={st.arrowIcon} />
      </button>
      <div ref={sliderRef} className={st.sliderWrapper}>
        <div className={st.slider}>
          {data.map((item) => (
            <AnimeCard key={item._id} data={item} className={st.slide} />
          ))}
          {watchAllHref && (
            <WatchAllCard href={watchAllHref} className={st.slide} />
          )}
          <div className={st.slideEmpty} />
        </div>
      </div>
    </div>
  )
}

export { AnimeCardCarousel }
