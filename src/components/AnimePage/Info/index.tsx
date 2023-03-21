import { IAnimeInfo } from '@/supportingTool/types'

import styles from './index.module.scss'
import Label from './Label'
import AddInfo from './AddInfo'
import Description from './Description'

interface IInfo {
  data: IAnimeInfo;
}

const Info = ({ data }: IInfo) => {
  return (
    <section className={styles.info}>
      <Label labels={data.labels} />
      <AddInfo
        episodes={data.episodes}
        kind={data.kind}
        genres={data.genres}
        rating={data.rating}
        studios={data.studios}
        dates={data.dates}
        videos={data.videos}
        status={data.status}
      />
      <Description description={data.description || ''} />
    </section>
  )
}

export default Info
