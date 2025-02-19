import { getHomePageData } from '@entities/blocks/api'

import { SeasonalCarousel } from './SeasonalCarousel/SeasonalCarousel'
import { BlockRow } from './BlockRow/BlockRow'

const MainPage = async () => {
  const { seasonalAnimes, rowsAnime } = await getHomePageData()

  return (
    <>
      <SeasonalCarousel data={seasonalAnimes} />
      {rowsAnime.map((row, index) => (
        <BlockRow {...row} key={index} />
      ))}
    </>
  )
}

export { MainPage }
