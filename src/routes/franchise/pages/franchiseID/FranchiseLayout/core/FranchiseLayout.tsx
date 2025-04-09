import { getAnimesByFranchise } from '@entities/franchise/api/getAnimesByFranchise'
import { notFound } from 'next/navigation'

import { IFranchiseLayoutProps } from '../types/IFranchiseLayoutProps'

const FranchiseLayout = async (props: IFranchiseLayoutProps) => {
  const { params, children } = props
  const { franchiseID } = await params

  try {
    const franchiseData = await getAnimesByFranchise(franchiseID, 1, 40)

    if (!franchiseData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { FranchiseLayout }
