import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"

import { ISeasonalAnime } from "@/supportingTool/types"
import useWindowSize from "@/supportingTool/functions/useWindowSize"

import styles from "./index.module.scss"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import OneSlide from "./OneSlide"

interface ISeasonal {
  data: ISeasonalAnime[]
}

const Seasonal = ({ data }: ISeasonal) => {
  const { windowSize, laptop } = useWindowSize()

  return (
    <section
      className={styles.swiper}
      style={{ maxWidth: windowSize - (laptop ? 1 : 17) + "px" }}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor
        loop
        centeredSlides
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Autoplay, Navigation]}
        className={styles.swiper__block}
      >
        {data.map((el) => (
          <SwiperSlide key={el.shiki_id} className={styles.swiper__slide}>
            <OneSlide el={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Seasonal
