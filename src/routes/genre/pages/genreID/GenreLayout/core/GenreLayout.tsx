import { IGenreLayoutProps } from '../types/IGenreLayoutProps'
import { notFound } from 'next/navigation'
import { getAnimesByGenre } from '@entities/genre/api'

const GenreLayout = async (props: IGenreLayoutProps) => {
  const { params, children } = props
  const { genreID } = await params

  try {
    const genreData = await getAnimesByGenre(genreID)

    if (!genreData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { GenreLayout }
