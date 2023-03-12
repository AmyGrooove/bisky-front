import { Swiper, SwiperSlide } from 'swiper/react'

import { PosterAnime } from '@/supportingTool/types'
import 'swiper/css'
import Poster from '@/components/Common/Poster'
import 'swiper/css/grid'
import { ARROW_RIGHT, LOADING_ICON } from '@/theme/sources'

import AmyImage from '../AmyImage'

import styles from './index.module.scss'

import Link from 'next/link'

import usePosterSlider from './index.use'

interface IPosterSlider {
  data?: PosterAnime[];
  options: {
    path?: string;
    column?: boolean;
    goToFull?: string;
  };
}

const PosterSlider = ({ data, options }: IPosterSlider) => {
  const { getAnimes, onBeforeInit, onSlideChange, firstAnimes, secondAnimes } =
    usePosterSlider(options, data)

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      grabCursor
      onBeforeInit={onBeforeInit}
      onSlideChange={onSlideChange}
      className={styles.posterSlider}
    >
      {(options && options.column ? firstAnimes : getAnimes).map(
        (el, index) => (
          <SwiperSlide key={el.shiki_id} className={styles.posterSlider__slide}>
            <Poster el={el} offBack={!options.column} />
            {options.column && (
              <Poster el={secondAnimes[index]} offBack={!options.column} />
            )}
          </SwiperSlide>
        ),
      )}
      <SwiperSlide className={styles.posterSlider__slide}>
        {options && options.goToFull && 12 <= getAnimes.length ? (
          <Link
            href={options.goToFull}
            className={styles.posterSlider__slide_arrow}
          >
            <AmyImage
              className={styles.posterSlider__slide_arrow_img}
              src={ARROW_RIGHT}
              height={60}
              width={70}
            />
            <h2 className={styles.posterSlider__slide_arrow_label}>
              Показать все
            </h2>
          </Link>
        ) : (
          <div
            className={`${styles.posterSlider__slide_load} ${
              options &&
              options.column &&
              styles.posterSlider__slide_load_column
            }`}
          >
            <AmyImage
              className={styles.posterSlider__slide_load_img}
              width={70}
              height={70}
              src={LOADING_ICON}
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  )
}

export default PosterSlider
