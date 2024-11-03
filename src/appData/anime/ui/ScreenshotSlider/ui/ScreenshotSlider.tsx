"use client"

import { cn } from "@shared/utils/functions"
import { Fancybox } from "@shared/utils/lib"
import { ArrowIcon } from "@shared/icons"
import { PlaceholderImage, Text } from "@shared/ui/atoms"

import { IScreenshotSliderProps } from "../types/IScreenshotSliderProps"

import st from "./ScreenshotSlider.module.scss"
import { useScreenshotSlider } from "./useScreenshotSlider"

const ScreenshotSlider = (props: IScreenshotSliderProps) => {
  const {
    items,
    screenshotsSize,
    className,
    otherProps,
    instanceRef,
    currentSlide,
    sliderRef,
  } = useScreenshotSlider(props)

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
              <a
                key={item}
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                data-fancybox="gallery"
              >
                <PlaceholderImage
                  src={item}
                  alt=""
                  width={screenshotsSize.width}
                  height={screenshotsSize.height}
                  className={cn(st.image, "keen-slider__slide")}
                />
              </a>
            ))}
          </div>
        </Fancybox>
      </div>
    </div>
  )
}

export { ScreenshotSlider }
