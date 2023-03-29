import Link from 'next/link'
import { useRouter } from 'next/router'

import AmyImage from '@/components/Common/AmyImage'

import styles from './index.module.scss'

interface IMainPage {
  poster: string | null;
  status: 'released' | 'anons' | 'ongoing';
}

const MainImage = ({ poster, status }: IMainPage) => {
  const { query } = useRouter()

  return (
    <section className={styles.mainImage}>
      <div className={styles.mainImage_wrapper}>
        <AmyImage
          src={poster}
          width={250}
          height={360}
          imageType="poster"
          className={styles.mainImage_img}
        />
        {status !== 'anons' && (
          <Link href={'/anime/' + query.animeId + '/player'}>
            <button className={styles.mainImage_button}>Смотреть</button>
          </Link>
        )}
        <button className={styles.mainImage_button}>Добавить в закладки</button>
      </div>
    </section>
  )
}

export default MainImage
