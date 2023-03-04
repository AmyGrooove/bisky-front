import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

import { SeasonalAnime } from '@/supportingTool/types'

import styles from './index.module.scss'
import useSeasonal from './index.use'

import 'swiper/css'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { BISKY_POSTER_BLUR_BIG, BISKY_POSTER_BLUR } from '@/theme/sources'
import { getRating } from '@/supportingTool/functions'

interface ISeasonal {
  data: SeasonalAnime[];
}

const Seasonal = ({ data }: ISeasonal) => {
  const { imageIndex } = useSeasonal()

  return (
    <section>
      <Swiper
        slidesPerView={'auto'} grabCursor
        centeredSlides loop>
        {data.map((el) => (
          <SwiperSlide key={el.shiki_id} className={styles.swiper__slide}>
            <>
              {el.screenshots.map((el, index) => (
                <Image
                  key={index}
                  width={1000}
                  height={500}
                  quality={30}
                  placeholder="blur"
                  blurDataURL={BISKY_POSTER_BLUR_BIG}
                  loading="eager"
                  src={SHIKI_URL + 'system/screenshots/original/' + el + '.jpg'}
                  alt=""
                  className={`${styles.swiper__slide_img} ${
                    imageIndex === index
                      ? styles.swiper__slide_img_visible
                      : styles.swiper__slide_img_hidden
                  }`}
                />
              ))}
              <Link href={'#'} className={styles.swiper__slide_link}>
                <span className={styles.swiper__card}>
                  <Image
                    height={335}
                    width={225}
                    quality={70}
                    placeholder="blur"
                    blurDataURL={BISKY_POSTER_BLUR}
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
                    {el.score}
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
