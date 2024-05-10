import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

const useSeasonSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: { perView: "auto", origin: "center", spacing: 20 },
      loop: true,
      drag: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
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

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })

          nextTimeout()
        })

        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],
  )

  return { sliderRef, instanceRef, currentSlide }
}

export { useSeasonSlider }
