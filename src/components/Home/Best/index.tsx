import Link from 'next/link'
import Image from 'next/image'

import { PosterAnime } from '@/supportingTool/types'
import { SHIKI_URL } from '@/supportingTool/constatns'
import { BISKY_POSTER_BLUR } from '@/theme/sources'

import styles from './index.module.scss'
import useBest from './index.use'

interface IBest {
  data: PosterAnime[];
}

const Best = ({ data }: IBest) => {
  const { bestAnimes, ShowNewPage } = useBest(data)

  return (
    <section className={styles.best}>
      <div className={styles.best__block}>
        <Link href="#">
          <h1 className={styles.best__label}>Самое популярное</h1>
        </Link>
        <div className={styles.best__table}>
          {bestAnimes.map((el) => (
            <Link
              href="#"
              key={el.shiki_id}
              className={styles.best__table__element}
            >
              <Image
                src={
                  el.image
                    ? SHIKI_URL + 'system/animes/original/' + el.image + '.jpg'
                    : ''
                }
                placeholder="blur"
                quality={70}
                blurDataURL={BISKY_POSTER_BLUR}
                width={180}
                height={290}
                alt=""
                className={styles.best__table__element_img}
              />
              <h2 className={styles.best__table__element_label}>
                {el.label.ru}
              </h2>
            </Link>
          ))}
        </div>
        <button className={styles.best__button} onClick={ShowNewPage}>
          Загрузить больше
        </button>
      </div>
    </section>
  )
}

export default Best
