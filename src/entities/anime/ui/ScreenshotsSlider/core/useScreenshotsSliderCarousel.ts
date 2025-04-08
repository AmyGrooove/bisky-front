import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { IScreenshotsSliderCarouselProps } from '../types/IScreenshotsSliderCarouselProps'

const useScreenshotsSliderCarousel = (
  props: IScreenshotsSliderCarouselProps,
) => {
  const { screenshots, isLabelEnabled = true, className } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [isCanScrollPrev, setIsCanScrollPrev] = useState(false)
  const [isCanScrollNext, setIsCanScrollNext] = useState(false)

  const isDragEnabled = isCanScrollPrev || isCanScrollNext

  const [sliderRef, sliderApi] = useEmblaCarousel({
    dragFree: true,
    watchDrag: isDragEnabled,
  })

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
  }, [sliderApi])

  useEffect(() => {
    setIsSliderLoading(false)
  }, [sliderApi])

  return {
    screenshots,
    sliderRef,
    isSliderLoading,
    scrollPrev,
    scrollNext,
    isCanScrollPrev,
    isCanScrollNext,
    isDragEnabled,
    isLabelEnabled,
    className,
  }
}

export { useScreenshotsSliderCarousel }
