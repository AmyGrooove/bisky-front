import { AnimeCardCarousel } from '@entities/anime/ui/AnimeCardCarousel'

import { useMainPage } from './useMainPage'
import { SeasonalCarousel } from './SeasonalCarousel/core/SeasonalCarousel'
import { InfiniteHomeRow } from './InfiniteHomeRow'

const MainPage = async () => {
  const { homeData, pageVariant } = await useMainPage()

  return (
    <>
      <SeasonalCarousel
        seasonalData={homeData.seasonalAnimes}
        variant={pageVariant}
      />
      <AnimeCardCarousel
        variant={pageVariant}
        labelProps={{
          label: 'Новые серии',
          link: { label: 'Онгоинги', href: '#', watchAllType: 'anime' },
        }}
        isReleasedStatusHide={false}
        animesData={homeData.newEpisodeAnimes}
      />
      <AnimeCardCarousel
        variant={pageVariant}
        labelProps={{
          label: 'Топ-100',
          link: { label: 'Смотреть все', href: '#', watchAllType: 'anime' },
        }}
        animesData={homeData.bestAnimes}
      />
      <InfiniteHomeRow variant={pageVariant} />
    </>
  )
}

export { MainPage }
