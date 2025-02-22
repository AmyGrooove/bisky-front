import { getAnimeFullInfo } from '@entities/anime/api'
import { IAnimePageProps } from '../types/IAnimePageProps'
import { AnimeHeader } from './AnimeHeader/AnimeHeader'
import { AdultWarning } from '@widgets/AdultWarning'
import { AnimeInfo } from './AnimeInfo/AnimeInfo'
import { PlayerModule } from '@entities/player/ui/PlayerModule'
import { ScreenshotsSliderCarousel } from '@entities/anime/ui/ScreenshotsSlider'
import st from './AnimePage.module.scss'
import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { Label } from '@shared/ui/molecules/Label'

const AnimePage = async (props: IAnimePageProps) => {
  const { animeID } = await props.params

  const animeData = await getAnimeFullInfo(animeID)

  const franchiseHref = `/franchise/${animeData.franchise}`

  return (
    <>
      <AdultWarning isCheckEnabled={animeData.rating === 'r_plus'} />
      <AnimeHeader data={animeData} />
      <AnimeInfo data={animeData} />
      <PlayerModule animeShikiID={String(animeData.shikiID)} />
      {animeData.related.length !== 0 && (
        <div className={st.animeRow}>
          <Label
            variant="big"
            className={st.label_big}
            href={franchiseHref}
            linkText="Франшиза"
          >
            Связанное
          </Label>
          <Label
            variant="small"
            className={st.label_small}
            href={franchiseHref}
            linkText="Франшиза"
          >
            Связанное
          </Label>
          <AnimeCardCarousel data={animeData.related} />
        </div>
      )}
      {animeData.screenshots.length !== 0 && (
        <ScreenshotsSliderCarousel screenshots={animeData.screenshots} />
      )}
      <div className={st.barMargin} />
    </>
  )
}

export { AnimePage }
