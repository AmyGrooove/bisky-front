'use client'

import st from './StudioPage.module.scss'
import { useStudioPage } from './useStudioPage'
import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { getEmptyArray } from '@shared/utils/functions'
import { StudioHeader } from './StudioHeader/StudioHeader'

const StudioPage = () => {
  const {
    animeCards,
    isEnd,
    studioName,
    studioDescription,
    loadingRef,
    isLoading,
  } = useStudioPage()

  return (
    <>
      <SectionLabel className={st.sectionLabel}>{studioName}</SectionLabel>
      <StudioHeader name={studioName} description={studioDescription} />
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

export { StudioPage }
