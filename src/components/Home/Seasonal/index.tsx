import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

import { SeasonalAnime } from '@/supportingTool/types'

import styles from './index.module.scss'
import useSeasonal from './index.use'

import 'swiper/css'
import { SHIKI_URL } from '@/supportingTool/constatns'

interface ISeasonal {
  data: SeasonalAnime[];
}

const Seasonal = ({ data }: ISeasonal) => {
  const { getRating, currentScreen } = useSeasonal()

  return (
    <section>
      <Swiper
        slidesPerView={'auto'} grabCursor
        centeredSlides loop>
        {data.map((el) => (
          <SwiperSlide key={el.shiki_id} className={styles.swiper__slide}>
            <>
              <Image
                width={1000}
                height={500}
                quality={50}
                src={
                  SHIKI_URL +
                  'system/screenshots/original/' +
                  el.screenshots[currentScreen] +
                  '.jpg'
                }
                alt=""
                className={styles.swiper__slide_img}
              />
              <Link href={'#'} className={styles.swiper__slide_link}>
                <span className={styles.swiper__card}>
                  <Image
                    height={335}
                    width={225}
                    quality={80}
                    src={
                      el.image
                        ? SHIKI_URL +
                          'system/animes/original/' +
                          el.image +
                          '.jpg'
                        : ''
                    }
                    alt=""
                    className={styles.swiper__card_img}
                  />
                  <div className={styles.swiper__card__name}>
                    <h1 className={styles.swiper__card__name_text}>
                      {el.label.ru}
                    </h1>
                  </div>
                </span>
                <span className={styles.swiper__genre}>
                  <h2 className={styles.swiper__genre_label}>
                    {el.genres.map((gen) => (
                      <li
                        key={gen.name.en}
                        className={styles.swiper__genre_name}
                      >
                        {gen.name.ru}
                      </li>
                    ))}
                  </h2>
                </span>
                <span className={styles.swiper__rating}>
                  <h2
                    className={`${styles.swiper__rating_score} ${getRating(
                      el.score,
                    )}`}
                  >
                    {el.score.toFixed(1)}
                  </h2>
                </span>
              </Link>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Seasonal
