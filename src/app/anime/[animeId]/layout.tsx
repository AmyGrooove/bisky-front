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

  try {
    const animeData = await getCurrentAnimeData({ animeId })

    return {
      title: animeData?.labels?.ru ?? "",
      description: animeData?.description?.ru ?? "",
      openGraph: {
        title:
          (animeData?.labels?.ru ?? animeData?.labels?.en ?? "") +
          " | Bisky — Смотреть Аниме",
        description:
          animeData?.description?.ru ?? animeData?.description?.en ?? "",
        url: `${APP_URL}/anime/${animeData._id}`,
        images: animeData?.screenshots,
      },
    }
  } catch (error) {
    return {}
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
