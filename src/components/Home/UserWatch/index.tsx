import { Swiper, SwiperSlide } from 'swiper/react'

import { UserMainAnimes } from '@/supportingTool/types'

import styles from './index.module.scss'

import 'swiper/css'
import Poster from '@/components/Poster'

import Link from 'next/link'

interface IUserWatch {
  data: UserMainAnimes;
}

const UserWatch = ({ data }: IUserWatch) => {
  return (
    <section className={styles.userWatch}>
      <div className={styles.userWatch__block}>
        <Link href="#">
          <h1 className={styles.userWatch__label}>
            {data.status === 'watch'
              ? 'Продолжить просмотр'
              : 'Начать просмотр'}
          </h1>
        </Link>
        <Swiper
          slidesPerView={'auto'} spaceBetween={20}
          grabCursor>
          {data.posterAnime.map((el) => (
            <SwiperSlide key={el.shiki_id} className={styles.userWatch__slide}>
              <Poster
                el={el} offBack
                offName />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default UserWatch
