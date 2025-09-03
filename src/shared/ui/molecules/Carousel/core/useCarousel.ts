import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { isNil } from '@shared/utils/functions'

import { ICarouselProps } from '../types/ICarouselProps'

const useCarousel = (props: ICarouselProps) => {
  const {
    slidesData,
    className,
    variant = 'big',
    skeletonTemplate,
    carouselProps,
    carouselPlugins,
    currentIndex = 0,
    setCurrentIndex,
  } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [isCanScrollPrev, setIsCanScrollPrev] = useState(false)
  const [isCanScrollNext, setIsCanScrollNext] = useState(false)
  const initialStartIndexRef = useRef(currentIndex)

  const isDragEnabled = useMemo(
    () => isCanScrollPrev || isCanScrollNext,
    [isCanScrollPrev, isCanScrollNext],
  )

  const [sliderRef, sliderApi] = useEmblaCarousel(
    { ...(carouselProps ?? {}), startIndex: initialStartIndexRef.current },
    [AutoHeight(), ...(carouselPlugins ?? [])],
  )

  const scrollPrev = useCallback(() => {
    if (!isNil(sliderApi)) sliderApi.scrollPrev()
  }, [sliderApi])

  const scrollNext = useCallback(() => {
    if (!isNil(sliderApi)) sliderApi.scrollNext()
  }, [sliderApi])

  useEffect(() => {
    if (isNil(sliderApi)) return

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

  useEffect(() => {
    if (isNil(sliderApi)) return

    const selected = sliderApi.selectedScrollSnap()
    if (selected !== currentIndex) {
      sliderApi.scrollTo(currentIndex, false)
    }
  }, [currentIndex, sliderApi])

  useEffect(() => {
    if (isNil(sliderApi)) return

    const handleSelect = () => {
      const index = sliderApi.selectedScrollSnap()
      if (setCurrentIndex) setCurrentIndex(index)
    }

    handleSelect()
    sliderApi.on('select', handleSelect)
    sliderApi.on('reInit', handleSelect)

    return () => {
      sliderApi.off('select', handleSelect)
      sliderApi.off('reInit', handleSelect)
    }
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
