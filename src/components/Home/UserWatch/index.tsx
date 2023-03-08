import { Swiper, SwiperSlide } from 'swiper/react'

import { UserMainAnimes } from '@/supportingTool/types'
import 'swiper/css'
import Poster from '@/components/Common/Poster'
import BlockLabel from '@/components/Common/BlockLabel'

import styles from './index.module.scss'

interface IUserWatch {
  data: UserMainAnimes;
}

const UserWatch = ({ data }: IUserWatch) => {
  return (
    <section className={styles.userWatch}>
      <div className={styles.userWatch__block}>
        <BlockLabel
          label={
            data.status === 'watch' ? 'Продолжить просмотр' : 'Начать просмотр'
          }
          href="#"
          leftPadding
        />
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor
          className={styles.userWatch__swiper}
        >
          {data.posterAnime.map((el) => (
            <SwiperSlide key={el.shiki_id} className={styles.userWatch__slide}>
              <Poster el={el} offBack />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default UserWatch
