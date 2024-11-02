import { useKeenSlider } from "keen-slider/react"
import { useMemo, useState } from "react"

import { IAnimeCardSliderProps } from "../types/IAnimeCardSliderProps"
import { divideArray } from "../functions/divideArray"
import { IAnimeCardSliderItems } from "../types/IAnimeCardSliderItems"

const useAnimeCardSlider = (props: IAnimeCardSliderProps) => {
  const {
    items,
    isTwoRows = false,
    isCatalogSliderOn = false,
    className,
    ...otherProps
  } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: "auto", spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const sliderItems: IAnimeCardSliderItems[] = useMemo(
    () => (isTwoRows ? divideArray(items) : []),
    [items],
  )

  return {
    items,
    isTwoRows,
    isCatalogSliderOn,
    className,
    otherProps,
    instanceRef,
    sliderRef,
    sliderItems,
    currentSlide,
  }
}

export { useAnimeCardSlider }
