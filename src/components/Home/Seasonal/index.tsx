import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { Autoplay } from 'swiper'

import { SeasonalAnime } from '@/supportingTool/types'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { getRating } from '@/supportingTool/functions'
import AmyImage from '@/components/Common/AmyImage'
import { BLUR_POSTER, BLUR_POSTER_BIG } from '@/theme/sources'

import styles from './index.module.scss'
import useSeasonal from './index.use'

interface ISeasonal {
  data: SeasonalAnime[];
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
                  width={1000}
                  height={500}
                  quality={30}
                  src={SHIKI_URL + 'system/screenshots/original/' + el + '.jpg'}
                  alt=""
                  className={`${styles.swiper__slide_img} ${
                    imageIndex === index
                      ? styles.swiper__slide_img_visible
                      : styles.swiper__slide_img_hidden
                  }`}
                  backSrc={BLUR_POSTER_BIG}
                  border
                />
              ))}
              <Link
                href={'anime/' + el.shiki_id}
                className={styles.swiper__slide_link}
              >
                <span className={styles.swiper__card}>
                  <AmyImage
                    height={335}
                    width={225}
                    quality={70}
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
                    backSrc={BLUR_POSTER}
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
