'use client'

import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { getEmptyArray } from '@shared/utils/functions'

import { useGenrePage } from './useGenrePage'
import st from './GenrePage.module.scss'
import { GenreHeader } from './GenreHeader/GenreHeader'

const GenrePage = () => {
  const {
    animeCards,
    isEnd,
    genreName,
    genreDescription,
    loadingRef,
    isLoading,
  } = useGenrePage()

  return (
    <>
      <SectionLabel className={st.sectionLabel}>{genreName}</SectionLabel>
      <GenreHeader name={genreName} description={genreDescription} />
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

export { GenrePage }
