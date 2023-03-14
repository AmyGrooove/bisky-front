import { AnimeInfo } from '@/supportingTool/types'

import styles from './index.module.scss'
import Label from './Label'
import AddInfo from './AddInfo'

interface IInfo {
  data: AnimeInfo;
}

const Info = ({ data }: IInfo) => {
  return (
    <section className={styles.info}>
      <Label label={data.label} all_labels={data.all_labels} />
      <AddInfo
        kind={data.kind}
        status={data.status}
        next_episode_at={data.next_episode_at}
        episodes={{
          count: data.episodes,
          aired: data.episodes_aired,
          duration: data.duration,
        }}
        genres={data.genres}
        rating={data.rating}
        studios={data.studios}
        releaseDates={{
          aired_on: data.aired_on,
          released_on: data.released_on,
        }}
        videos={data.videos}
      />
    </section>
  )
}

export default Info
