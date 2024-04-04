"use client"

import { useKeenSlider } from "keen-slider/react"
import { useMemo, useState } from "react"

import { AnimeCard } from "@entities/Anime"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { IAnimeCardSliderProps } from "../types/IAnimeCardSliderProps"
import { divideArray } from "../functions/divideArray"
import { IAnimeCardSliderItems } from "../types/IAnimeCardSliderItems"

import st from "./AnimeCardSlider.module.scss"

const AnimeCardSlider = (props: IAnimeCardSliderProps) => {
  const { items, isTwoRows = false, className, ...otherProps } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 6, spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const sliderItems: IAnimeCardSliderItems[] = useMemo(
    () => (isTwoRows ? divideArray(items) : []),
    [items],
  )

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      {items.length > 6 && (
        <div className={st.arrowWrapper}>
          <ArrowIcon
            onClick={() => instanceRef.current?.prev()}
            className={cn(st.arrow, {
              [st.arrow_disabled]: currentSlide === 0,
            })}
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
      )}
      <div ref={sliderRef} className="keen-slider">
        {isTwoRows
          ? sliderItems.map((item) => (
              <div
                key={item.field1._id + (item.field2?._id ?? "")}
                className={cn(st.cardColumn, "keen-slider__slide")}
              >
                <AnimeCard anime={item.field1} />
                {item.field2 && <AnimeCard anime={item.field2} />}
              </div>
            ))
          : items.map((item) => (
              <AnimeCard
                key={item._id}
                anime={item}
                className="keen-slider__slide"
              />
            ))}
      </div>
    </div>
  )
}

export { AnimeCardSlider }
