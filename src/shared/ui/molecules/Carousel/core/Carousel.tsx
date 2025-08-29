'use client'

import { cn, getEmptyArray } from '@shared/utils/functions'
import { ChevronLeftIcon, ChevronRightIcon } from '@shared/icons'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, memo } from 'react'

import { ICarouselProps } from '../types/ICarouselProps'

import st from './Carousel.module.scss'
import { useCarousel } from './useCarousel'

const Carousel = memo(
  forwardRef<HTMLDivElement, ICarouselProps>((props, ref) => {
    const {
      slidesData,
      className,
      sliderRef,
      isSliderLoading,
      scrollPrev,
      scrollNext,
      isCanScrollPrev,
      isCanScrollNext,
      isDragEnabled,
      variant,
      skeletonTemplate,
      carouselProps,
    } = useCarousel(props)

    return (
      <div
        ref={ref}
        className={cn(st.root, className, st[`root_${variant}`], {
          [st.root_looped]: carouselProps?.loop ?? false,
        })}
      >
        {isSliderLoading ? (
          <div
            className={cn(st.skeletonWrapper, className, {
              [st.skeletonWrapper_center]: carouselProps?.align === 'center',
            })}
          >
            {getEmptyArray(19).map((_, index) => (
              <Skeleton
                key={index}
                templates={skeletonTemplate}
                variant={variant}
              />
            ))}
          </div>
        ) : (
          <>
            {isDragEnabled && variant === 'big' && (
              <>
                <div className={cn(st.buttonWrapper, st.buttonWrapper_prev)}>
                  <Button
                    onClick={scrollPrev}
                    isDisabled={!isCanScrollPrev}
                    Icon={ChevronLeftIcon}
                    variant="big"
                    className={st.button}
                  />
                </div>
                <div className={cn(st.buttonWrapper, st.buttonWrapper_next)}>
                  <Button
                    onClick={scrollNext}
                    isDisabled={!isCanScrollNext}
                    variant="big"
                    Icon={ChevronRightIcon}
                    className={st.button}
                  />
                </div>
              </>
            )}
            <div
              ref={sliderRef}
              className={cn(st.sliderWrapper, {
                [st.sliderWrapper_drag]: isDragEnabled,
              })}
            >
              <div className={st.slider}>
                {slidesData.map((item, index) => (
                  <div key={index} className={st.slide}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }),
)

Carousel.displayName = 'Carousel'

export { Carousel }
