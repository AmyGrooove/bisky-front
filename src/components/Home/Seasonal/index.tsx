import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

import { HomeAnime } from '@/constants/types'

import styles from './index.module.scss'
import useSeasonal from './index.use'

import 'swiper/css'

interface ISeasonal {
  data: HomeAnime[];
}

const Seasonal = ({ data }: ISeasonal) => {
  const { getRating } = useSeasonal()
  console.log(data[0].image)
  return (
    <section>
      <Swiper
        slidesPerView={'auto'} grabCursor
        centeredSlides loop>
        {data.map((el) => (
          <SwiperSlide
            key={el.shiki_id}
            className={styles.swiper__slide}
            style={{
              backgroundImage: `url(${el.screenshots[0]})`,
            }}
          >
            <Link href={'#'} className={styles.swiper__slide_link}>
              <span className={styles.swiper__card}>
                <Image
                  height={335}
                  width={225}
                  src={el.image}
                  alt=""
                  className={styles.swiper__card_img}
                />
                <div className={styles.swiper__card__name}>
                  <h1 className={styles.swiper__card__name_text}>{el.name}</h1>
                </div>
              </span>
              <span className={styles.swiper__genre}>
                <h2 className={styles.swiper__genre_label}>
                  {el.genres.map((gen) => (
                    <li key={gen} className={styles.swiper__genre_name}>
                      {gen}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Seasonal
