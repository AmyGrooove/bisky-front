"use client"

import { GenreBlock } from "@entities/Genre"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"

import st from "./GenreBlockSlider.module.scss"
import { useGenreBlockSlider } from "./useGenreBlockSlider"

const GenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { items, className, ...otherProps } = props

  const { instanceRef, sliderRef, currentSlide } = useGenreBlockSlider()

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.arrowWrapper}>
        <ArrowIcon
          onClick={() => instanceRef.current?.prev()}
          className={cn(st.arrow, { [st.arrow_disabled]: currentSlide === 0 })}
        />
        <ArrowIcon
          onClick={() => instanceRef.current?.next()}
          className={cn(st.arrow, {
            [st.arrow_disabled]:
              currentSlide ===
              (instanceRef.current?.track.details.slides.length ?? 0) - 6,
          })}
        />
      </div>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item) => (
          <GenreBlock
            key={item._id}
            genre={item}
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  )
}

export { GenreBlockSlider }
