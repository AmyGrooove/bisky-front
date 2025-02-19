import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { IAnimeCardCarouselProps } from '../types/IAnimeCardCarouselProps'

const useAnimeCardCarousel = (props: IAnimeCardCarouselProps) => {
  const { data, watchAllHref } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLastSlide, setIsLastSlide] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 'auto', spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      setIsLastSlide(slider.track.details.maxIdx === slider.track.details.rel)
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 'auto', spacing: 8 },
      },
    },
  })

  useEffect(() => {
    setIsSliderLoading(false)
  }, [instanceRef])

  return {
    data,
    sliderRef,
    currentSlide,
    instanceRef,
    isSliderLoading,
    isLastSlide,
    watchAllHref,
  }
}

export { useAnimeCardCarousel }
