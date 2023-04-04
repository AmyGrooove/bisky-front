import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Navigation } from "swiper"

import { IPosterAnime } from "@/supportingTool/types"
import Poster from "@/components/Common/Poster"
import { ARROW_RIGHT, LOADING_ICON } from "@/theme/sources"
import useWindowSize from "@/supportingTool/functions/useWindowSize"

import "swiper/css"
import "swiper/css/navigation"

import AmyImage from "../AmyImage"

import styles from "./index.module.scss"
import usePosterSlider from "./index.use"

export interface IPosterSlider {
  data?: IPosterAnime[]
  path?: string
  column?: boolean
  goToFull?: string
}

const PosterSlider = ({ data, path, column, goToFull }: IPosterSlider) => {
  const { animes, animesColumn, onSlideChange } = usePosterSlider({
    data,
    path,
    column,
    goToFull,
  })

  const { laptop, mobile } = useWindowSize()

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={laptop ? (mobile ? 10 : 20) : 30}
      grabCursor
      onSlideChange={onSlideChange}
      className={styles.posterSlider}
      navigation
      modules={[Navigation]}
    >
      {(column ? animesColumn.first : animes).map((el, index) => (
        <SwiperSlide key={el.shiki_id} className={styles.posterSlider__slide}>
          <Poster
            shiki_id={el.shiki_id}
            poster={el.poster || null}
            labels={el.labels[0]}
            scores={el.scores[0]}
            status={el.status}
          />
          {column && (
            <Poster
              shiki_id={animesColumn.second[index].shiki_id}
              poster={animesColumn.second[index].poster || null}
              labels={animesColumn.second[index].labels[0]}
              scores={animesColumn.second[index].scores[0]}
              status={animesColumn.second[index].status}
            />
          )}
        </SwiperSlide>
      ))}
      {path && (
        <SwiperSlide className={styles.posterSlider__slide}>
          {goToFull && animes.length >= 12 ? (
            <Link href={goToFull} className={styles.posterSlider__slide_arrow}>
              <AmyImage
                src={ARROW_RIGHT}
                height={60}
                width={70}
                className={styles.posterSlider__slide_arrow_img}
              />
              <span className={styles.posterSlider__slide_arrow_label}>
                Показать все
              </span>
            </Link>
          ) : (
            <div
              className={`${styles.posterSlider__slide_load} ${
                column && styles.posterSlider__slide_load_column
              }`}
            >
              <AmyImage
                src={LOADING_ICON}
                width={70}
                height={70}
                className={styles.posterSlider__slide_load_img}
              />
            </div>
          )}
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default PosterSlider
