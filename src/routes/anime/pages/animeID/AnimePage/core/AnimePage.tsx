'use client'

import { AnimeHeader } from './AnimeHeader/AnimeHeader'
import { AdultWarning } from '@widgets/AdultWarning'
import { AnimeInfo } from './AnimeInfo/AnimeInfo'
import { PlayerModule } from '@entities/player/ui/PlayerModule'
import { ScreenshotsSliderCarousel } from '@entities/anime/ui/ScreenshotsSlider'
import st from './AnimePage.module.scss'
import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'
import { Label } from '@shared/ui/molecules/Label'
import { useAnimePage } from './useAnimePage'
import { isNil } from '@shared/utils/functions'
import { AnimeLoading } from '../../AnimeLoading'

const AnimePage = () => {
  const { franchiseHref, data, isLoading } = useAnimePage()

  return (
    <>
      {isNil(data) || isLoading ? (
        <AnimeLoading />
      ) : (
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
      )}
    </>
  )
}

export { AnimePage }
