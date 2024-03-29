"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"
import { GenreBlock } from "@entities/Genre"

const GenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { items, className, ...otherProps } = props

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
  })

  return (
    <div {...otherProps} ref={sliderRef} className="keen-slider">
      {items.map((item) => (
        <GenreBlock
          key={item._id}
          genre={item}
          href="#"
          className="keen-slider__slide"
        />
      ))}
    </div>
  )
}

export { GenreBlockSlider }
