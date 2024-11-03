import { useKeenSlider } from "keen-slider/react"
import { useContext, useState } from "react"

import { ModalContext } from "@widgets/ModalProvider"

import { IVideoSliderProps } from "../types/IVideoSliderProps"

const useVideoSlider = (props: IVideoSliderProps) => {
  const { items, className, ...otherProps } = props

  const { setModal } = useContext(ModalContext)

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
    setModal,
  }
}

export { useVideoSlider }
