import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import { IVideoSliderProps } from "../types/IVideoSliderProps"

const useVideoSlider = (props: IVideoSliderProps) => {
  const { items, className, ...otherProps } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: "auto", spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return {
    items,
    className,
    otherProps,
    instanceRef,
    currentSlide,
    sliderRef,
  }
}

export { useVideoSlider }
