import { useMainPage } from './useMainPage'
import st from './MainPage.module.scss'
import { SeasonalCarousel } from './SeasonalCarousel/core/SeasonalCarousel'

const MainPage = async () => {
  const { homeData, isMobile } = await useMainPage()

  return (
    <div className={st.root}>
      <SeasonalCarousel
        seasonalData={homeData.seasonalAnimes}
        variant={isMobile ? 'small' : 'big'}
      />
    </div>
  )
}

export { MainPage }
