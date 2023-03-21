import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { Autoplay } from 'swiper'

import { ISeasonalAnime } from '@/supportingTool/types'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import { getRating } from '@/supportingTool/functions'
import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'
import useSeasonal from './index.use'

interface ISeasonal {
  data: ISeasonalAnime[];
}

const Seasonal = ({ data }: ISeasonal) => {
  const { imageIndex } = useSeasonal()

  return (
    <section>
      <Swiper
        slidesPerView={'auto'}
        grabCursor
        centeredSlides
        loop
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
      >
        {data.map((el) => (
          <SwiperSlide key={el.shiki_id} className={styles.swiper__slide}>
            <>
              {el.screenshots.map((el, index) => (
                <AmyImage
                  key={index}
                  src={el}
                  width={1000}
                  height={500}
                  imageType="screenshot"
                  quality={30}
                  className={`${styles.swiper__slide_img} ${
                    imageIndex === index
                      ? styles.swiper__slide_img_visible
                      : styles.swiper__slide_img_hidden
                  }`}
                />
              ))}
              <Link
                href={'anime/' + el.shiki_id}
                className={styles.swiper__slide_link}
              >
                <span className={styles.swiper__card}>
                  <AmyImage
                    src={el.poster}
                    height={335}
                    width={225}
                    imageType="poster"
                    quality={70}
                    className={styles.swiper__card_img}
                  />
                  <div className={styles.swiper__card__name}>
                    <h3 className={styles.swiper__card__name_text}>
                      {el.labels[0]}
                    </h3>
                  </div>
                </span>
                <span className={styles.swiper__genre}>
                  <span className={styles.swiper__genre_label}>
                    {el.genres.map((gen) => (
                      <li
                        key={gen.name.ru}
                        className={styles.swiper__genre_name}
                      >
                        {gen.name.ru}
                      </li>
                    ))}
                  </span>
                </span>
                <span className={styles.swiper__rating}>
                  <span
                    className={`${styles.swiper__rating_score} ${getRating(
                      el.scores[0],
                    )}`}
                  >
                    {el.scores[0]}
                  </span>
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
