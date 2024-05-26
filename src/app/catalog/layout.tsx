import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { ICatalogLayoutProps } from "@appData/catalog"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Каталог",
    description: "Каталог",
    openGraph: {
      title: "Каталог | Bisky — Смотреть Аниме",
      description: "Каталог",
      url: `${APP_URL}/catalog`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const CatalogLayout = async (props: ICatalogLayoutProps) => {
  const { children } = props

  return <>{children}</>
}

export default CatalogLayout
