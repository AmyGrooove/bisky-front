import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { IFastSelectLayoutProps } from "@appData/fastSelect"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Быстрый выбор",
    description: "Быстрый выбор",
    openGraph: {
      title: "Быстрый выбор | Bisky — Смотреть Аниме",
      description: "Быстрый выбор",
      url: `${APP_URL}/fastSelect`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const FastSelectLayout = async (props: IFastSelectLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export default FastSelectLayout
