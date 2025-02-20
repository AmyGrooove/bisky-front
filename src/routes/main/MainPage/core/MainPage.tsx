import { getHomePageData } from '@entities/blocks/api'

import { getExcludeGenreIDs } from '../utils/getExcludeGenreIDs'

import { SeasonalCarousel } from './SeasonalCarousel/SeasonalCarousel'
import { BlockRow } from './BlockRow/BlockRow'
import { InfiniteRows } from './InfiniteRows/InfiniteRows'
import st from './MainPage.module.scss'

const MainPage = async () => {
  const { seasonalAnimes, rowsAnime } = await getHomePageData()

  const excludeGenreIDs = getExcludeGenreIDs(rowsAnime)

  return (
    <>
      <SeasonalCarousel data={seasonalAnimes} />
      {rowsAnime.map((row, index) => (
        <BlockRow {...row} key={index} />
      ))}
      <InfiniteRows excludeGenreIDs={excludeGenreIDs} />
      <div className={st.barMargin} />
    </>
  )
}

export { MainPage }
