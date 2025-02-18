import { getHomePageData } from '@entities/blocks/api'

import { SeasonalCarousel } from './SeasonalCarousel/SeasonalCarousel'

const MainPage = async () => {
  const { seasonalAnimes } = await getHomePageData()

  return (
    <>
      <SeasonalCarousel data={seasonalAnimes} />
    </>
  )
}

export { MainPage }
