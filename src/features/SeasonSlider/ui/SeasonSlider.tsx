"use client"

import { useKeenSlider } from "keen-slider/react"

import { Season } from "@entities/Anime"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { ISeasonSliderProps } from "../types/ISeasonSliderProps"

import st from "./SeasonSlider.module.scss"

const SeasonSlider = (props: ISeasonSliderProps) => {
  const { items, className, ...otherProps } = props

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

  return (
    <div className={cn(st.root, className)}>
      <div className={st.arrowWrapper}>
        <ArrowIcon
          onClick={() => instanceRef.current?.prev()}
          className={st.arrow}
        />
        <ArrowIcon
          onClick={() => instanceRef.current?.next()}
          className={st.arrow}
        />
      </div>
      <div {...otherProps} ref={sliderRef} className="keen-slider">
        {items.map((item) => (
          <Season
            key={item._id}
            anime={item}
            href="#"
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  )
}

export { SeasonSlider }
