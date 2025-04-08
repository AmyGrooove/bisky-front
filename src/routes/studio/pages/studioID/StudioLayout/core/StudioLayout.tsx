import { getAnimesByStudio } from '@entities/studio/api/getAnimesByStudio'
import { notFound } from 'next/navigation'

import { IStudioLayoutProps } from '../types/IStudioLayoutProps'

const StudioLayout = async (props: IStudioLayoutProps) => {
  const { params, children } = props
  const { studioID } = await params

  try {
    const studioData = await getAnimesByStudio(studioID, 1, 40, true)

    if (!studioData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { StudioLayout }
