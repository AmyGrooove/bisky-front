import { Metadata } from "next"

import { APP_URL } from "@shared/constants"
import { ILegalLayoutProps } from "@appData/legal"
import { Text } from "@shared/ui/atoms"
import { legalLayoutStyles as st } from "@appData/legal"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Правила",
    description: "Правила",
    openGraph: {
      title: "Правила | Bisky — Смотреть Аниме",
      description: "Правила",
      url: `${APP_URL}/rules`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const RulesLayout = async (props: ILegalLayoutProps) => {
  const { children } = props

  return (
    <div className={st.root}>
      <div className={st.header}>
        <Text size="28" weight="700" as="h1">
          Правила
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

export default RulesLayout
