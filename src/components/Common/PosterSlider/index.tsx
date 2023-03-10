import { Swiper, SwiperSlide } from 'swiper/react'

import { PosterAnime } from '@/supportingTool/types'
import 'swiper/css'
import Poster from '@/components/Common/Poster'
import BlockLabel from '@/components/Common/BlockLabel'

import 'swiper/css/grid'
import useGetAnimes from '@/supportingTool/functions/useGetAnimes'
import { ARROW_RIGHT } from '@/theme/sources'

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
          onReachEnd={
            goToFull && goToFull.count <= getAnimes.length
              ? () => {}
              : ShowNewPage
          }
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
          {goToFull && goToFull.count <= getAnimes.length && (
            <SwiperSlide className={styles.posterSlider__slide}>
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
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default PosterSlider
