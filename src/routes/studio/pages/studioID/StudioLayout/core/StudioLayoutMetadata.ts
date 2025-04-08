import { Metadata } from 'next'
import { ENV } from '@shared/static'
import { getAnimesByStudio } from '@entities/studio/api/getAnimesByStudio'

import { IStudioLayoutProps } from '../types/IStudioLayoutProps'

const StudioLayoutMetadata = async (
  props: IStudioLayoutProps,
): Promise<Metadata> => {
  const { studioID } = await props.params

  try {
    const studioData = await getAnimesByStudio(studioID, 1, 40, true)

    const title = studioData.studio.name ?? ''

    return {
      title,
      description: studioData.studio.description,
      openGraph: {
        title: title + ' | Bisky — Смотреть Аниме',
        description: studioData.studio.description ?? '',
        url: `${ENV.APP_URL}/studio/${studioData.studio._id}`,
      },
    }
  } catch (_) {
    return {}
  }
}

export { StudioLayoutMetadata }
