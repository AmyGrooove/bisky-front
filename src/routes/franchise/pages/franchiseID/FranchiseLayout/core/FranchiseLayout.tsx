import { IFranchiseLayoutProps } from '../types/IFranchiseLayoutProps'
import { notFound } from 'next/navigation'
import { getAnimesByFranchise } from '@entities/franchise/api'

const FranchiseLayout = async (props: IFranchiseLayoutProps) => {
  const { params, children } = props
  const { franchiseID } = await params

  try {
    const franchiseData = await getAnimesByFranchise(franchiseID)

    if (!franchiseData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { FranchiseLayout }
