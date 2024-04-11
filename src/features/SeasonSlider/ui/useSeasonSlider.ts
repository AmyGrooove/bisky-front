import { useKeenSlider } from "keen-slider/react"

const useSeasonSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: { origin: "center", spacing: 20 },
      loop: true,
      drag: true,
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

  return { sliderRef, instanceRef }
}

export { useSeasonSlider }
