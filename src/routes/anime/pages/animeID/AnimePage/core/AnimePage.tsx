'use client'

import { AdultWarning } from '@widgets/AdultWarning'
import { PlayerModule } from '@entities/player/ui/PlayerModule'
import { ScreenshotsSliderCarousel } from '@entities/anime/ui/ScreenshotsSlider'
import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { Label } from '@shared/ui/molecules/Label'
import { isNil } from '@shared/utils/functions'

import { AnimeLoading } from '../../AnimeLoading'

import { useAnimePage } from './useAnimePage'
import st from './AnimePage.module.scss'
import { AnimeInfo } from './AnimeInfo/AnimeInfo'
import { AnimeHeader } from './AnimeHeader/AnimeHeader'

const AnimePage = () => {
  const { franchiseHref, data, isLoading } = useAnimePage()

  if (isNil(data) || isLoading) return <AnimeLoading />

  return (
    <>
      <AdultWarning isCheckEnabled={data.rating === 'r_plus'} />
      <AnimeHeader data={data} />
      <AnimeInfo data={data} />
      <PlayerModule animeShikiID={String(data.shikiID)} />
      {data.related.length !== 0 && (
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
          <AnimeCardCarousel data={data.related} />
        </div>
      )}
      {data.screenshots.length !== 0 && (
        <ScreenshotsSliderCarousel screenshots={data.screenshots} />
      )}
      <div className={st.barMargin} />
    </>
  )
}

export { AnimePage }
