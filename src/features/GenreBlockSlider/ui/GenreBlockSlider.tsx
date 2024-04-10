"use client"

import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import { GenreBlock } from "@entities/Genre"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"

import st from "./GenreBlockSlider.module.scss"

const GenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { items, className, ...otherProps } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

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
            href="#"
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  )
}

export { GenreBlockSlider }
