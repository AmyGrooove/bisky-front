import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { IFranchisePageProps } from '../types/IFranchisePageProps'
import { FranchiseHeader } from './FranchiseHeader/FranchiseHeader'
import st from './FranchisePage.module.scss'
import { getAnimesByFranchise } from '@entities/franchise/api'
import { AnimeCards } from './AnimeCards/AnimeCards'

const FranchisePage = async (props: IFranchisePageProps) => {
  const { franchiseID } = await props.params

  const franchiseData = await getAnimesByFranchise(franchiseID)

  return (
    <>
      <SectionLabel className={st.sectionLabel}>
        {franchiseData.franchise.name ??
          franchiseData.franchise.shikiID ??
          'Франшиза'}
      </SectionLabel>
      <FranchiseHeader data={franchiseData} />
      <AnimeCards data={franchiseData} />
      <div className={st.barMargin} />
    </>
  )
}

export { FranchisePage }
