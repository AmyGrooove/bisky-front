import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { IGenresLayoutProps } from "@appData/genres"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Жанры",
    description: "Все жанры",
    openGraph: {
      title: "Жанры",
      description: "Все жанры",
      url: `${APP_URL}/genres`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const GenresLayout = async (props: IGenresLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export default GenresLayout
