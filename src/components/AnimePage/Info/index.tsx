import { createContext } from 'react'

import { IAnimeInfo } from '@/supportingTool/types'

import styles from './index.module.scss'
import Label from './Label'
import Description from './Description'
import AddInfo from './AddInfo'

interface IInfo {
  data: IAnimeInfo;
}

export const AnimeInfoContext = createContext<IAnimeInfo>({
  shiki_id: 0,
  labels: [],
  poster: null,
  kind: 'tv',
  scores: [],
  status: 'released',
  episodes: { count: null, aired: null, duration: 0, next_episode_at: null },
  dates: { aired_on: null, released_on: null },
  rating: 'none',
  description: null,
  screenshots: [],
  videos: [],
  genres: [],
  studios: [],
  relations: { franchise: null, animes: [] },
})

const Info = ({ data }: IInfo) => {
  return (
    <AnimeInfoContext.Provider
      value={{
        shiki_id: data.shiki_id,
        labels: data.labels,
        poster: data.poster,
        kind: data.kind,
        scores: data.scores,
        status: data.status,
        episodes: data.episodes,
        dates: data.dates,
        rating: data.rating,
        description: data.description,
        screenshots: data.screenshots,
        videos: data.videos,
        genres: data.genres,
        studios: data.studios,
        relations: data.relations,
      }}
    >
      <section className={styles.info}>
        <Label />
        <AddInfo />
        <Description />
      </section>
    </AnimeInfoContext.Provider>
  )
}

export default Info
