"use client"

import { useKeenSlider } from "keen-slider/react"

import { Season } from "@entities/Anime"
import { cn } from "@shared/utils/functions"

import { ISeasonSliderProps } from "../types/ISeasonSliderProps"

const SeasonSlider = (props: ISeasonSliderProps) => {
  const { items, className, ...otherProps } = props

  const [sliderRef] = useKeenSlider({ slides: { origin: "center" } })

  return (
    <div className={className}>
      <div {...otherProps} ref={sliderRef} className={"keen-slider"}>
        {items.map((item) => (
          <Season
            key={item._id}
            anime={item}
            href="/"
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  )
}

export { SeasonSlider }
