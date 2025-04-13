'use client'

import { MainLoading } from '@routes/main/MainLoading'

import { SeasonalCarousel } from './SeasonalCarousel/SeasonalCarousel'
import { InfiniteRows } from './InfiniteRows/InfiniteRows'
import st from './MainPage.module.scss'
import { useMainPage } from './useMainPage'

const MainPage = () => {
  const { seasonalAnimes, rowsAnime, excludeGenreIDs, isHomeLoading } =
    useMainPage()

  if (isHomeLoading) return <MainLoading />

  return (
    <>
      <SeasonalCarousel data={seasonalAnimes} />
      <InfiniteRows
        excludeGenreIDs={excludeGenreIDs}
        initialRowData={rowsAnime}
      />
      <div className={st.barMargin} />
    </>
  )
}

export { MainPage }
