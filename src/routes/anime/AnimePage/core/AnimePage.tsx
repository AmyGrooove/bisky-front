import { getAnimeFullInfo } from '@entities/anime/api'
import { IAnimePageProps } from '../types/IAnimePageProps'
import { AnimeHeader } from './AnimeHeader/AnimeHeader'
import { AdultWarning } from '@widgets/AdultWarning'
import { AnimeInfo } from './AnimeInfo/AnimeInfo'

const AnimePage = async (props: IAnimePageProps) => {
  const { animeID } = await props.params

  const animeData = await getAnimeFullInfo(animeID)

  return (
    <>
      <AdultWarning isCheckEnabled={animeData.rating === 'r_plus'} />
      <AnimeHeader data={animeData} />
      <AnimeInfo data={animeData} />
    </>
  )
}

export { AnimePage }
