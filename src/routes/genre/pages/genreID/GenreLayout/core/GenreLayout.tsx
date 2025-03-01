import { getAnimesByGenre } from '@entities/genre/api/getAnimesByGenre'
import { IGenreLayoutProps } from '../types/IGenreLayoutProps'
import { notFound } from 'next/navigation'

const GenreLayout = async (props: IGenreLayoutProps) => {
  const { params, children } = props
  const { genreID } = await params

  try {
    const genreData = await getAnimesByGenre(genreID, 1, 40, true)

    if (!genreData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { GenreLayout }
