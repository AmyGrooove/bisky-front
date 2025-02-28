'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import st from './FastFindLoading.module.scss'
import { MiniAnimeInfoModalLoading } from '@entities/anime/ui/MiniAnimeInfoModal'

const FastFindLoading = () => {
  return (
    <>
      <div className={st.root}>
        <MiniAnimeInfoModalLoading className={st.rightSide} />
        <div className={st.panel}>
          <Skeleton className={st.bigButton} />
          <Skeleton className={st.poster} />
          <div className={st.buttons}>
            <Skeleton className={st.smallButton} />
            <Skeleton className={st.bigButton} />
            <Skeleton className={st.bigButton} />
            <Skeleton className={st.smallButton} />
          </div>
          <Skeleton className={st.watchNow} />
        </div>
      </div>
    </>
  )
}

export { FastFindLoading }
