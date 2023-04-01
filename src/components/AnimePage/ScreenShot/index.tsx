import { AnimeInfoContext } from "@/pages/anime/[animeId]"

import { useContext } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/navigation"

import { FreeMode, Navigation } from "swiper"

import AmyImage from "@/components/Common/AmyImage"
import "swiper/css/free-mode"
import BlockLabel from "@/components/Common/BlockLabel"
import { ModalContext } from "@/components/Common/Modal"

import styles from "./index.module.scss"

const ScreenShot = () => {
  const { screenshots } = useContext(AnimeInfoContext)
  const { setModal } = useContext(ModalContext)

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
                onClick={() =>
                  setModal(
                    <AmyImage
                      src={el}
                      imageType="screenshot"
                      width={1280}
                      height={720}
                      className={styles.screenshot__img_full}
                    />,
                  )
                }
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
