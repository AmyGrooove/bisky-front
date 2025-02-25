'use client'

import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { FranchiseHeader } from './FranchiseHeader/FranchiseHeader'
import st from './FranchisePage.module.scss'
import { useFranchisePage } from './useFranchisePage'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { getEmptyArray } from '@shared/utils/functions'

const FranchisePage = () => {
  const {
    animeCards,
    franchiseName,
    franchiseDescription,
    isEnd,
    loadingRef,
    isLoading,
  } = useFranchisePage()

  return (
    <>
      <SectionLabel className={st.sectionLabel}>{franchiseName}</SectionLabel>
      <FranchiseHeader
        name={franchiseName}
        description={franchiseDescription}
      />
      <div className={st.animes}>
        {animeCards.map((anime) => (
          <AnimeCard key={anime._id} data={anime} />
        ))}
        {(!isEnd || isLoading) && (
          <div className={st.animes} ref={loadingRef}>
            {getEmptyArray(12).map((_, index) => (
              <Skeleton key={index} templates="animeCard" />
            ))}
          </div>
        )}
      </div>
      <div className={st.barMargin} />
    </>
  )
}

export { FranchisePage }
