'use client'

import { SeasonalCarousel } from './SeasonalCarousel/SeasonalCarousel'
import { InfiniteRows } from './InfiniteRows/InfiniteRows'
import st from './MainPage.module.scss'
import { useMainPage } from './useMainPage'
import { MainLoading } from '@routes/main/MainLoading'

const MainPage = () => {
  const { seasonalAnimes, rowsAnime, excludeGenreIDs, isHomeLoading } =
    useMainPage()

  return (
    <>
      {isHomeLoading ? (
        <MainLoading />
      ) : (
        <>
          <SeasonalCarousel data={seasonalAnimes} />
          <InfiniteRows
            excludeGenreIDs={excludeGenreIDs}
            initialRowData={rowsAnime}
          />
        </>
      )}
      <div className={st.barMargin} />
    </>
  )
}

export { MainPage }
