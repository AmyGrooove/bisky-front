import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { ILegalLayoutProps } from "@appData/legal"
import { Text } from "@shared/ui/atoms"
import { legalLayoutStyles as st } from "@appData/legal"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Политика конфиденциальности",
    description: "Политика конфиденциальности",
    openGraph: {
      title: "Политика конфиденциальности | Bisky — Смотреть Аниме",
      description: "Политика конфиденциальности",
      url: `${APP_URL}/privacy`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const PrivacyLayout = async (props: ILegalLayoutProps) => {
  const { children } = props

  return (
    <div className={st.root}>
      <div className={st.header}>
        <Text size="28" weight="700" as="h1">
          Политика конфиденциальности
        </Text>
        <Text as="p" className={st.headerSubTitle}>
          Bisky
        </Text>
      </div>
      <div className={st.main}>
        <ol className={st.olSpace}>{children}</ol>
      </div>
    </div>
  )
}

export default PrivacyLayout
