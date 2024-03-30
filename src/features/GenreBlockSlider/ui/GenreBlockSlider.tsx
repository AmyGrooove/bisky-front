"use client"

import { useKeenSlider } from "keen-slider/react"

import { GenreBlock } from "@entities/Genre"
import { cn } from "@shared/utils/functions"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"

const GenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { items, className, ...otherProps } = props

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
  })

  return (
    <div
      {...otherProps}
      ref={sliderRef}
      className={cn("keen-slider", className)}
    >
      {items.map((item) => (
        <GenreBlock
          key={item._id}
          genre={item}
          href="/"
          className="keen-slider__slide"
        />
      ))}
    </div>
  )
}

export { GenreBlockSlider }
