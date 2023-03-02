import Link from 'next/link'
import Image from 'next/image'

import { PosterAnime } from '@/supportingTool/types'

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
        <h1>Самое популярное</h1>
        <div className={styles.best__table}>
          {bestAnimes.map((el) => (
            <div key={el.shiki_id} className={styles.best__table__element}>
              {el.label.ru}
            </div>
          ))}
        </div>

        <button onClick={ShowNewPage}>ЕЩЕ</button>
      </div>
    </section>
  )
}

export default Best
