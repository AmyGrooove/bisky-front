import { useKeenSlider } from "keen-slider/react"
import { useState, useMemo } from "react"

import { IAnimeCardSliderProps } from "../types/IAnimeCardSliderProps"
import { divideArray } from "../functions/divideArray"
import { IAnimeCardSliderItems } from "../types/IAnimeCardSliderItems"

const useAnimeCardSlider = (props: IAnimeCardSliderProps) => {
  const { isTwoRows, items } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 6, spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const sliderItems: IAnimeCardSliderItems[] = useMemo(
    () => (isTwoRows ? divideArray(items) : []),
    [items],
  )

  return { instanceRef, currentSlide, sliderRef, sliderItems }
}

export { useAnimeCardSlider }
