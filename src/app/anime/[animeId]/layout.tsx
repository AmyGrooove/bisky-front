import { notFound } from "next/navigation"

import { IAnimeLayoutProps } from "@appData/animePage/types/IAnimeLayoutProps"
import { IAnimeFullModel } from "@entities/Anime/types/IAnimeFullModel"

const AnimeLayout = (props: IAnimeLayoutProps) => {
  const {
    params: { animeId },
    children,
  } = props

  let animeData: IAnimeFullModel
  try {
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default AnimeLayout
