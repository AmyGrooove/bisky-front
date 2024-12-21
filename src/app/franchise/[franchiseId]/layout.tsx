import { Metadata } from "next"
import { notFound } from "next/navigation"

import { APP_URL } from "@shared/constants"
import { IFranchiseLayoutProps } from "@appData/franchise"
import { getCurrentFranchiseData } from "@appData/franchise/api"

export async function generateMetadata(
  props: IFranchiseLayoutProps,
): Promise<Metadata> {
  const { franchiseId } = await props.params

  const franchiseData = await getCurrentFranchiseData({ franchiseId })

  return {
    title:
      franchiseData?.name?.ru ??
      franchiseData?.name?.en ??
      franchiseData?.shikiId ??
      "",
    description:
      franchiseData?.name?.ru ??
      franchiseData?.name?.en ??
      franchiseData?.shikiId ??
      "",
    openGraph: {
      title:
        franchiseData?.name?.ru ??
        franchiseData?.name?.en ??
        franchiseData?.shikiId ??
        "",
      description:
        franchiseData?.name?.ru ??
        franchiseData?.name?.en ??
        franchiseData?.shikiId ??
        "",
      url: `${APP_URL}/franchise`,
      images: `${APP_URL}/images/openGraph.png`,
    },
  }
}

const FranchiseLayout = async (props: IFranchiseLayoutProps) => {
  const { children } = props
  const { franchiseId } = await props.params

  try {
    const franchiseData = await getCurrentFranchiseData({ franchiseId })

    if (!franchiseData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default FranchiseLayout
