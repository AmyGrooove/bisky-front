import { useCallback, useEffect, useState } from 'react'
import { ISeasonalCarouselProps } from '../../types/ISeasonalCarouselProps'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const useSeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { data } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [sliderRef, sliderApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 10000, stopOnInteraction: false })],
  )

  const scrollPrev = useCallback(() => {
    if (sliderApi) sliderApi.scrollPrev()
  }, [sliderApi])

  const scrollNext = useCallback(() => {
    if (sliderApi) sliderApi.scrollNext()
  }, [sliderApi])

  useEffect(() => {
    if (!sliderApi) return

    const onSelect = () => setSelectedIndex(sliderApi.selectedScrollSnap())
    onSelect()

    sliderApi.on('select', onSelect)
  }, [sliderApi])

  useEffect(() => {
    setIsSliderLoading(false)
  }, [sliderApi])

  return {
    data,
    sliderRef,
    selectedIndex,
    scrollPrev,
    scrollNext,
    isSliderLoading,
  }
}

export { useSeasonalCarousel }
