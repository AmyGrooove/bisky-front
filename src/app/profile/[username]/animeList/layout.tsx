import { Metadata } from "next"
import { notFound } from "next/navigation"

import { APP_URL } from "@shared/constants"
import { getCurrentUserData } from "@appData/profile/api"
import { IAnimeListLayoutProps } from "@appData/profile/subpages/animeList"

export async function generateMetadata(
  props: IAnimeListLayoutProps,
): Promise<Metadata> {
  const { username } = await props.params

  const userData = await getCurrentUserData({ username })

  return {
    title: (userData.username ?? "") + " — Список Аниме",
    openGraph: {
      title:
        (userData.username ?? "") + " — Список Аниме | Bisky — Смотреть Аниме",
      url: `${APP_URL}/profile/${userData.username}/animeList`,
      images: userData.avatar ?? `${APP_URL}/images/openGraph.png`,
    },
  }
}

const AnimeListLayout = async (props: IAnimeListLayoutProps) => {
  const { username } = await props.params
  const { children } = props

  try {
    await getCurrentUserData({ username })
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default AnimeListLayout
