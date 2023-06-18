"use client"

import { useKeenSlider } from "keen-slider/react"

import { cl } from "@/utils"

import "keen-slider/keen-slider.min.css"

import AppImage from "../AppImage"

import styles from "./index.module.scss"

interface ISlider {
  images?: string[]
  className?: string
}

const Slider = ({ images = [], className }: ISlider) => {
  const animation = { duration: 50000, easing: (t: number) => t }
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: { perView: "auto" },
    renderMode: "performance",
    drag: true,
    range: {
      min: 0,
      max: images.length,
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className={cl("keen-slider", styles.slider)}>
      {images.map((image, index) => (
        <div
          key={index}
          className={cl("keen-slider__slide", styles.slider__slide)}
        >
          <AppImage
            alt={image}
            src={image}
            width={600}
            height={330}
            imageType="screenshot"
            className={styles.slider__slide__image}
          />
        </div>
      ))}
    </div>
  )
}

export default Slider
