"use client"

import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

import { cn } from "@shared/utils/functions"
import { Fancybox } from "@shared/utils/lib"
import { ArrowIcon } from "@shared/icons"
import { PlaceholderImage, Text } from "@shared/ui/atoms"

import { IScreenshotSliderProps } from "../types/IScreenshotSliderProps"

import st from "./ScreenshotSlider.module.scss"

const ScreenshotSlider = (props: IScreenshotSliderProps) => {
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
        Кадры
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
        <Fancybox options={{ Carousel: { infinite: false } }}>
          <div ref={sliderRef} className="keen-slider">
            {items.map((item) => (
              <PlaceholderImage
                key={item}
                src={item}
                alt=""
                width={528}
                height={290}
                className={cn(st.image, "keen-slider__slide")}
              />
            ))}
          </div>
        </Fancybox>
      </div>
    </div>
  )
}

export { ScreenshotSlider }
