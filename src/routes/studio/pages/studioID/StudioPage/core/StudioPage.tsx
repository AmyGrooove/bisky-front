import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { IStudioPageProps } from '../types/IStudioPageProps'
import { StudioHeader } from './StudioHeader/StudioHeader'
import st from './StudioPage.module.scss'
import { getAnimesByStudio } from '@entities/studio/api'
import { AnimeCards } from './AnimeCards/AnimeCards'

const StudioPage = async (props: IStudioPageProps) => {
  const { studioID } = await props.params

  const studioData = await getAnimesByStudio(studioID)

  return (
    <>
      <SectionLabel className={st.sectionLabel}>
        {studioData.studio.name}
      </SectionLabel>
      <StudioHeader data={studioData} />
      <AnimeCards data={studioData} />
      <div className={st.barMargin} />
    </>
  )
}

export { StudioPage }
