import { IGenreLayoutProps } from '../types/IGenreLayoutProps'
import { Metadata } from 'next'
import { ENV } from '@shared/static'
import { getAnimesByGenre } from '@entities/genre/api/getAnimesByGenre'

const GenreLayoutMetadata = async (
  props: IGenreLayoutProps,
): Promise<Metadata> => {
  const { genreID } = await props.params

  try {
    const genreData = await getAnimesByGenre(genreID)

    const title = genreData.genre.name ?? ''

    return {
      title,
      description: genreData.genre.description,
      openGraph: {
        title: title + ' | Bisky — Смотреть Аниме',
        description: genreData.genre.description ?? '',
        url: `${ENV.APP_URL}/genre/${genreData.genre._id}`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { GenreLayoutMetadata }
