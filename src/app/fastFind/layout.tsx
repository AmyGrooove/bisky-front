import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { IFastFindLayoutProps } from "@appData/fastFind"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Быстрый поиск",
    description: "Быстрый поиск",
    openGraph: {
      title: "Быстрый поиск | Bisky — Смотреть Аниме",
      description: "Быстрый поиск",
      url: `${APP_URL}/fastFind`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const FastFindLayout = async (props: IFastFindLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export default FastFindLayout
