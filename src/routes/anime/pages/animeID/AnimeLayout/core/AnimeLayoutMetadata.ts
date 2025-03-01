import { IAnimeLayoutProps } from '../types/IAnimeLayoutProps'
import { Metadata } from 'next'
import { ENV } from '@shared/static'
import { getAnimeFullInfo } from '@entities/anime/api/getAnimeFullInfo'

const AnimeLayoutMetadata = async (
  props: IAnimeLayoutProps,
): Promise<Metadata> => {
  const { animeID } = await props.params

  try {
    const animeData = await getAnimeFullInfo(animeID, true)

    const title = animeData.labels.ru ?? animeData.labels.en ?? ''

    return {
      title,
      description: animeData.description,
      openGraph: {
        title: title + ' | Bisky — Смотреть Аниме',
        description: animeData.description ?? '',
        url: `${ENV.APP_URL}/anime/${animeData._id}`,
        images: animeData.screenshots,
      },
    }
  } catch (_) {
    return {}
  }
}

export { AnimeLayoutMetadata }
