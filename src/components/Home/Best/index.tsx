import BlockLabel from '@/components/Common/BlockLabel'
import PosterSlider from '@/components/Common/PosterSlider'
import { IPosterAnime } from '@/supportingTool/types'

import styles from './index.module.scss'

interface ISeasonal {
  data: IPosterAnime[];
}

const Best = ({ data }: ISeasonal) => {
  return (
    <section className={styles.best}>
      <div className={styles.best__block}>
        <BlockLabel
          label="Лучшее аниме" href="#"
          leftPadding />
        <PosterSlider
          data={data} column
          path="/home/best?" />
      </div>
    </section>
  )
}

export default Best
