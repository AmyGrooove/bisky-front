import { Metadata } from "next"
import { notFound } from "next/navigation"

import { IAnimeLayoutProps } from "@appData/anime"
import { APP_URL } from "@shared/constants"
import { getCurrentAnimeData } from "@appData/anime/api"

export async function generateMetadata(
  props: IAnimeLayoutProps,
): Promise<Metadata> {
  const {
    params: { animeId },
  } = props

  const animeData = await getCurrentAnimeData({ animeId })

  return {
    title: animeData.labels?.ru ?? "",
    description: animeData.description?.ru ?? "",
    openGraph: {
      title: (animeData.labels?.ru ?? "") + " | Bisky — Смотреть Аниме",
      description: animeData.description?.ru ?? "",
      url: `${APP_URL}/anime/${animeData._id}`,
      images: animeData.screenshots,
    },
  }
}

const AnimeLayout = async (props: IAnimeLayoutProps) => {
  const {
    params: { animeId },
    children,
  } = props

  try {
    const animeData = await getCurrentAnimeData({ animeId })

    if (!animeData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default AnimeLayout
