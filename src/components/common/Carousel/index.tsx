import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Fragment, ReactNode, useCallback, useEffect, useRef } from "react"
import styles from "./index.module.scss"
import IconButton from "../IconButton"
import { ArrowIcon } from "@/components/icons"
import { cl } from "@/utils"

interface ICarousel extends SwiperProps {
  slides: ReactNode[]
  keys: string[]

  label?: string
  labelButtons?: boolean
  doubleRow?: boolean
  className?: string
}

const Carousel = ({
  slides,
  keys,
  label,
  labelButtons,
  doubleRow,
  className,
  ...props
}: ICarousel) => {
  const sliderRef = useRef<SwiperRef>(null)

  const handlePrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className={cl(styles.carousel, className)}>
      <div className={styles.carousel__header}>
        {(label || labelButtons) && (
          <div className={styles.carousel__header__label}>{label ?? ""}</div>
        )}
        {labelButtons && (
          <div className={styles.carousel__header__buttons}>
            <IconButton
              variant="filled"
              icon={<ArrowIcon />}
              onClick={handlePrev}
              className={styles.carousel__header__buttons__left}
            />
            <IconButton
              variant="filled"
              icon={<ArrowIcon />}
              onClick={handleNext}
            />
          </div>
        )}
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        grabCursor
        className={styles.carousel__swiper}
        {...props}
      >
        {doubleRow
          ? slides.map((el, index) => (
              <Fragment key={keys[index]}>
                {index % 2 === 0 && (
                  <SwiperSlide
                    className={cl(
                      styles.carousel__swiper__slide,
                      styles.carousel__swiper__slide_double,
                    )}
                    key={keys[index]}
                  >
                    {el}
                    {slides[index + 1]}
                  </SwiperSlide>
                )}
              </Fragment>
            ))
          : slides.map((el, index) => (
              <SwiperSlide
                className={styles.carousel__swiper__slide}
                key={keys[index]}
              >
                {el}
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Carousel
