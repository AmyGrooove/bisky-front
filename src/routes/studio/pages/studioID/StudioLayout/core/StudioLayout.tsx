import { IStudioLayoutProps } from '../types/IStudioLayoutProps'
import { notFound } from 'next/navigation'
import { getAnimesByStudio } from '@entities/studio/api'

const StudioLayout = async (props: IStudioLayoutProps) => {
  const { params, children } = props
  const { studioID } = await params

  try {
    const studioData = await getAnimesByStudio(studioID)

    if (!studioData) throw new Error()
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export { StudioLayout }
