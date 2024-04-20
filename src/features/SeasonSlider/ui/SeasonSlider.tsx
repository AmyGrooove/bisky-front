"use client"

import { Season } from "@entities/Anime"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { ISeasonSliderProps } from "../types/ISeasonSliderProps"

import st from "./SeasonSlider.module.scss"
import { useSeasonSlider } from "./useSeasonSlider"

const SeasonSlider = (props: ISeasonSliderProps) => {
  const { items, className, ...otherProps } = props

  const { instanceRef, sliderRef } = useSeasonSlider()

  return (
    <div {...otherProps} className={cn(st.root, className)}>
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
      <div ref={sliderRef} className={cn(st.slider, "keen-slider")}>
        {items.map((item) => (
          <Season
            key={item._id + "Season"}
            anime={item}
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  )
}

export { SeasonSlider }
