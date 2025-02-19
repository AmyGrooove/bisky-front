import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { ISeasonalCarouselProps } from '../../types/ISeasonalCarouselProps'

const useSeasonalCarousel = (props: ISeasonalCarouselProps) => {
  const { data } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: { perView: 'auto', origin: 'center', spacing: 24 },
      loop: true,
      drag: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: { perView: 'auto', spacing: 8 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        const clearNextTimeout = () => clearTimeout(timeout)

        const nextTimeout = () => {
          clearTimeout(timeout)
          if (mouseOver) return

          timeout = setTimeout(() => slider.next(), 12000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })

          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })

          nextTimeout()
        })

        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  useEffect(() => {
    setIsSliderLoading(false)
  }, [instanceRef])

  return { data, sliderRef, currentSlide, instanceRef, isSliderLoading }
}

export { useSeasonalCarousel }
