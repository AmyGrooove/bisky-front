"use client"

import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import Link from "next/link"

import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"
import { Text, PlaceholderImage } from "@shared/ui/atoms"

import { IVideoSliderProps } from "../types/IVideoSliderProps"

import st from "./VideoSlider.module.scss"

const VideoSlider = (props: IVideoSliderProps) => {
  const { items, className, ...otherProps } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 2, spacing: 24 },
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Text size="28" weight="700">
        Видео
      </Text>
      <div className={st.sliderWrapper}>
        {items.length > 2 && (
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
                  (instanceRef.current?.track.details.slides.length ?? 0) - 2,
              })}
            />
          </div>
        )}
        <div ref={sliderRef} className="keen-slider">
          {items.map((item) => (
            <Link
              key={item.url}
              href={item.url ?? ""}
              target="_blank"
              className={cn(st.videoWrapper, "keen-slider__slide")}
            >
              <Text size="24" weight="700" className={st.videoTitle}>
                {item.name ?? ""}
              </Text>
              <PlaceholderImage
                src=""
                alt=""
                width={528}
                height={290}
                className={st.video}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { VideoSlider }
