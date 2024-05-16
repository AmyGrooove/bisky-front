"use client"

import Link from "next/link"

import { AnimeCard } from "@entities/Anime"
import { cn } from "@shared/utils/functions"
import { ArrowIcon, BackIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms"

import { IAnimeCardSliderProps } from "../types/IAnimeCardSliderProps"

import st from "./AnimeCardSlider.module.scss"
import { useAnimeCardSlider } from "./useAnimeCardSlider"

const AnimeCardSlider = (props: IAnimeCardSliderProps) => {
  const {
    items,
    isTwoRows = false,
    isCatalogSliderOn = false,
    className,
    ...otherProps
  } = props

  const { instanceRef, sliderRef, sliderItems, currentSlide } =
    useAnimeCardSlider(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      {instanceRef && (
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
                (instanceRef.current?.track.details.slides[
                  (instanceRef.current?.track.details.slides.length ?? 1) - 1
                ].portion ?? 0) > 0,
            })}
          />
        </div>
      )}
      <div ref={sliderRef} className={cn(st.slider, "keen-slider")}>
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
        {isCatalogSliderOn && (
          <Link
            href="/catalog"
            className={cn(st.catalogSlide, "keen-slider__slide", {
              [st.catalogSlide_twoRows]: isTwoRows,
            })}
          >
            <BackIcon className={st.catalogIcon} />
            <Text weight="700" size="20">
              В каталог
            </Text>
          </Link>
        )}
      </div>
    </div>
  )
}

export { AnimeCardSlider }
