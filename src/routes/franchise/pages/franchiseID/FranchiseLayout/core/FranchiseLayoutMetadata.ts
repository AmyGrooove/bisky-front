import { Metadata } from 'next'
import { ENV } from '@shared/static'
import { getAnimesByFranchise } from '@entities/franchise/api/getAnimesByFranchise'

import { IFranchiseLayoutProps } from '../types/IFranchiseLayoutProps'

const FranchiseLayoutMetadata = async (
  props: IFranchiseLayoutProps,
): Promise<Metadata> => {
  const { franchiseID } = await props.params

  try {
    const franchiseData = await getAnimesByFranchise(franchiseID, 1, 40, true)

    const title = franchiseData.franchise.name ?? ''

    return {
      title,
      description: franchiseData.franchise.description,
      openGraph: {
        title: title + ' | Bisky — Смотреть Аниме',
        description: franchiseData.franchise.description ?? '',
        url: `${ENV.APP_URL}/franchise/${franchiseData.franchise._id}`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { FranchiseLayoutMetadata }
