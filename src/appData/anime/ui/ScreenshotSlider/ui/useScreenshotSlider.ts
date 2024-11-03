import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import { IScreenshotSliderProps } from "../types/IScreenshotSliderProps"

const useScreenshotSlider = (props: IScreenshotSliderProps) => {
  const {
    items,
    screenshotsSize = { width: 528, height: 290 },
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

  return {
    items,
    screenshotsSize,
    className,
    otherProps,
    instanceRef,
    currentSlide,
    sliderRef,
  }
}

export { useScreenshotSlider }
