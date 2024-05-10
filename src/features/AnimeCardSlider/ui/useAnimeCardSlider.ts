import { useKeenSlider } from "keen-slider/react"
import { useMemo } from "react"

import { IAnimeCardSliderProps } from "../types/IAnimeCardSliderProps"
import { divideArray } from "../functions/divideArray"
import { IAnimeCardSliderItems } from "../types/IAnimeCardSliderItems"

const useAnimeCardSlider = (props: IAnimeCardSliderProps) => {
  const { isTwoRows, items } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: "auto", spacing: 24 },
    drag: true,
  })

  const sliderItems: IAnimeCardSliderItems[] = useMemo(
    () => (isTwoRows ? divideArray(items) : []),
    [items],
  )

  return {
    instanceRef,
    sliderRef,
    sliderItems,
  }
}

export { useAnimeCardSlider }
