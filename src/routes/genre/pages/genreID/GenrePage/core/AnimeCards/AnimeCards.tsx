'use client'

import { AnimeCard } from '@entities/anime/ui/AnimeCard'
import { IGenreSectionProps } from '../../types/IGenreSectionProps'
import { useAnimeCards } from './useAnimeCards'
import st from './AnimeCards.module.scss'
import { getEmptyArray } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

const AnimeCards = (props: IGenreSectionProps) => {
  const { animeCards, isEnd, loadingRef } = useAnimeCards(props)

  return (
    <div className={st.animes}>
      {animeCards.map((anime) => (
        <AnimeCard key={anime._id} data={anime} />
      ))}
      {!isEnd && (
        <div className={st.animes} ref={loadingRef}>
          {getEmptyArray(12).map((_, index) => (
            <Skeleton key={index} templates="animeCard" />
          ))}
        </div>
      )}
    </div>
  )
}

export { AnimeCards }
