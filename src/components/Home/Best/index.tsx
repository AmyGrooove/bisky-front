import Link from 'next/link'

import { PosterAnime } from '@/supportingTool/types'
import Poster from '@/components/Poster'

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
            <Poster key={el.shiki_id} el={el} />
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
