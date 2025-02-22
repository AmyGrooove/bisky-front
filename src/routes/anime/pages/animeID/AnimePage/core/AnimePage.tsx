import { getAnimeFullInfo } from '@entities/anime/api'
import { IAnimePageProps } from '../types/IAnimePageProps'
import { AnimeHeader } from './AnimeHeader/AnimeHeader'
import { AdultWarning } from '@widgets/AdultWarning'
import { AnimeInfo } from './AnimeInfo/AnimeInfo'
import { PlayerModule } from '@entities/player/ui/PlayerModule'
import { ScreenshotsSliderCarousel } from '@entities/anime/ui/ScreenshotsSlider'
import st from './AnimePage.module.scss'

const AnimePage = async (props: IAnimePageProps) => {
  const { animeID } = await props.params

  const animeData = await getAnimeFullInfo(animeID)

  return (
    <>
      <AdultWarning isCheckEnabled={animeData.rating === 'r_plus'} />
      <AnimeHeader data={animeData} />
      <AnimeInfo data={animeData} />
      <PlayerModule animeShikiID={String(animeData.shikiID)} />
      <ScreenshotsSliderCarousel screenshots={animeData.screenshots} />
      <div className={st.barMargin} />
    </>
  )
}

export { AnimePage }
