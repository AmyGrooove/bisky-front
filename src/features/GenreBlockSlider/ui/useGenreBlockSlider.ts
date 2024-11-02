import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"

const useGenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { items, className, ...otherProps } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: "auto",
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return { currentSlide, sliderRef, instanceRef, items, className, otherProps }
}

export { useGenreBlockSlider }
