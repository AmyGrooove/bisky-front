import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { ICarouselProps } from '../types/ICarouselProps'

const useCarousel = (props: ICarouselProps) => {
  const {
    slidesData,
    className,
    variant = 'big',
    skeletonTemplate = 'none',
    carouselProps,
    carouselPlugins,
  } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [isCanScrollPrev, setIsCanScrollPrev] = useState(false)
  const [isCanScrollNext, setIsCanScrollNext] = useState(false)

  const isDragEnabled = isCanScrollPrev || isCanScrollNext

  const [sliderRef, sliderApi] = useEmblaCarousel(
    carouselProps,
    carouselPlugins,
  )

  const scrollPrev = useCallback(() => {
    if (sliderApi) sliderApi.scrollPrev()
  }, [sliderApi])

  const scrollNext = useCallback(() => {
    if (sliderApi) sliderApi.scrollNext()
  }, [sliderApi])

  useEffect(() => {
    if (!sliderApi) return

    const onSelect = () => {
      setIsCanScrollPrev(sliderApi.canScrollPrev())
      setIsCanScrollNext(sliderApi.canScrollNext())
    }

    onSelect()
    sliderApi.on('select', onSelect)

    return () => {
      sliderApi.off('select', onSelect)
    }
  }, [sliderApi])

  useEffect(() => {
    setIsSliderLoading(false)
  }, [sliderApi])

  return {
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
  }
}

export { useCarousel }
