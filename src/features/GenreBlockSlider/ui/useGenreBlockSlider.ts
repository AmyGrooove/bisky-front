import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

const useGenreBlockSlider = () => {
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

  return { currentSlide, sliderRef, instanceRef }
}

export { useGenreBlockSlider }
