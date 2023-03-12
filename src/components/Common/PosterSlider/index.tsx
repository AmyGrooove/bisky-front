import { Swiper, SwiperSlide } from 'swiper/react'

import { PosterAnime } from '@/supportingTool/types'
import 'swiper/css'
import Poster from '@/components/Common/Poster'
import BlockLabel from '@/components/Common/BlockLabel'
import 'swiper/css/grid'
import useGetAnimes from '@/supportingTool/functions/useGetAnimes'
import { ARROW_RIGHT, LOADING_ICON } from '@/theme/sources'

import AmyImage from '../AmyImage'

import styles from './index.module.scss'

import Link from 'next/link'

interface IPosterSlider {
  animes: PosterAnime[];
  label: string;
  path: string;
  column?: boolean;
  goToFull?: {
    count: number;
    url: string;
  };
}

const PosterSlider = ({
  animes,
  label,
  path,
  column,
  goToFull,
}: IPosterSlider) => {
  const { getAnimes, ShowNewPage, firstAnimes, secondAnimes } = useGetAnimes({
    data: animes,
    path,
    usedAnimes: true,
    column,
  })

  return (
    <section className={styles.posterSlider}>
      <div className={styles.posterSlider__block}>
        <BlockLabel
          label={label} href="#"
          leftPadding />
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor
          onBeforeInit={(el) => el.slides.length === 0 && ShowNewPage()}
          onSlideChange={(el) => {
            goToFull && goToFull.count <= getAnimes.length
              ? () => {}
              : el.activeIndex >= el.slides.length - 6 && ShowNewPage()
          }}
          className={styles.posterSlider__swiper}
        >
          {(column ? firstAnimes : getAnimes).map((el, index) => (
            <SwiperSlide
              key={el.shiki_id}
              className={styles.posterSlider__slide}
            >
              <Poster el={el} offBack={!column} />
              {column && <Poster el={secondAnimes[index]} offBack={!column} />}
            </SwiperSlide>
          ))}
          <SwiperSlide className={styles.posterSlider__slide}>
            {goToFull && goToFull.count <= getAnimes.length ? (
              <Link
                href={goToFull.url}
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
                  column && styles.posterSlider__slide_load_column
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
      </div>
    </section>
  )
}

export default PosterSlider
