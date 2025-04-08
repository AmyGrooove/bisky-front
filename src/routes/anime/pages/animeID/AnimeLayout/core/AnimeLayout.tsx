import { getAnimeFullInfo } from '@entities/anime/api/getAnimeFullInfo'
import { notFound } from 'next/navigation'

import { IAnimeLayoutProps } from '../types/IAnimeLayoutProps'

const AnimeLayout = async (props: IAnimeLayoutProps) => {
  const { params, children } = props
  const { animeID } = await params

  try {
    const animeData = await getAnimeFullInfo(animeID, true)

    if (!animeData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { AnimeLayout }
