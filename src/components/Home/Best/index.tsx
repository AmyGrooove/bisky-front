import { PosterAnime } from '@/supportingTool/types'
import Poster from '@/components/Common/Poster'
import BlockLabel from '@/components/Common/BlockLabel'

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
        <BlockLabel label="Самое популярное" href="#" />
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
