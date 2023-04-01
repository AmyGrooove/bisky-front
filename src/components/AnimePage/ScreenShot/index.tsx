import { AnimeInfoContext } from "@/pages/anime/[animeId]"

import { useContext } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/navigation"
import styles from "./index.module.scss"

import { FreeMode, Navigation } from "swiper"

import AmyImage from "@/components/Common/AmyImage"
import "swiper/css/free-mode"
import BlockLabel from "@/components/Common/BlockLabel"

const ScreenShot = () => {
  const { screenshots } = useContext(AnimeInfoContext)

  return (
    <>
      {screenshots.length !== 0 && (
        <section className={styles.screenshot}>
          <BlockLabel label="Скриншоты" href="#" h4 slider />
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            grabCursor
            className={styles.screenshot__swiper}
            navigation
            freeMode
            modules={[Navigation, FreeMode]}
          >
            {screenshots.map((el) => (
              <SwiperSlide
                key={el}
                className={styles.screenshot__swiper__slide}
              >
                <AmyImage
                  src={el}
                  imageType="screenshot"
                  width={475}
                  height={300}
                  className={styles.screenshot__img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  )
}

export default ScreenShot
