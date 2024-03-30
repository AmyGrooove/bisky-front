"use client"

import { useKeenSlider } from "keen-slider/react"

import { Season } from "@entities/Anime"
import { cn } from "@shared/utils/functions"

import { ISeasonSliderProps } from "../types/ISeasonSliderProps"
import { ArrowIcon } from "@shared/icons"
import st from "./SeasonSlider.module.scss"

const SeasonSlider = (props: ISeasonSliderProps) => {
  const { items, className, ...otherProps } = props

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { origin: "center", spacing: 20 },
    loop: true,
    drag: true,
  })

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
