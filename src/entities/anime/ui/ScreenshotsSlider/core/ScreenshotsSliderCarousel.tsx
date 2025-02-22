'use client'

import { cn, getEmptyArray } from '@shared/utils/functions'
import { ChevronLeftIcon, ChevronRightIcon } from '@shared/icons'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import { IScreenshotsSliderCarouselProps } from '../types/IScreenshotsSliderCarouselProps'

import st from './ScreenshotsSliderCarousel.module.scss'
import { useScreenshotsSliderCarousel } from './useScreenshotsSliderCarousel'
import { PlaceholderImage } from '@shared/ui/atoms/PlaceholderImage'
import { Label } from '@shared/ui/molecules/Label'
import { Fancybox } from '@shared/ui/atoms/Fancybox'

const ScreenshotsSliderCarousel = (props: IScreenshotsSliderCarouselProps) => {
  const {
    screenshots,
    sliderRef,
    isSliderLoading,
    scrollPrev,
    scrollNext,
    isCanScrollPrev,
    isCanScrollNext,
  } = useScreenshotsSliderCarousel(props)

  return (
    <div className={st.root}>
      <Label variant="big" className={st.label_big}>
        Кадры
      </Label>
      <Label variant="small" className={st.label_small}>
        Кадры
      </Label>
      {isSliderLoading ? (
        <div className={st.skeleton}>
          {getEmptyArray(7).map((_, index) => (
            <Skeleton key={index} className={st.skeletonCard} />
          ))}
        </div>
      ) : (
        <div className={st.main}>
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
          <Fancybox>
            <div ref={sliderRef} className={st.sliderWrapper}>
              <div className={st.slider}>
                {screenshots.map((item) => (
                  <a
                    key={item}
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-fancybox="gallery"
                    className={st.slide}
                  >
                    <PlaceholderImage
                      className={st.slideImg}
                      src={item}
                      sizes={[400, 300]}
                    />
                  </a>
                ))}
                <div className={st.slideEmpty} />
              </div>
            </div>
          </Fancybox>
        </div>
      )}
    </div>
  )
}

export { ScreenshotsSliderCarousel }
