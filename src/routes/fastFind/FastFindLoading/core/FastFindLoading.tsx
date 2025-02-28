'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import st from './FastFindLoading.module.scss'
import { MiniAnimeInfoModalLoading } from '@entities/anime/ui/MiniAnimeInfoModal'
import { DonutIcon } from '@shared/icons'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { cn } from '@shared/utils/functions'

const FastFindLoading = () => {
  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={DonutIcon}>
        Быстрый поиск
      </SectionLabel>
      <div className={st.root}>
        <MiniAnimeInfoModalLoading className={st.rightSide} />
        <div className={st.panel}>
          <Skeleton className={cn(st.bigButton, st.bigButton_desktop)} />
          <Skeleton className={st.poster} />
          <div className={st.buttons}>
            <Skeleton className={st.smallButton} />
            <Skeleton className={st.bigButton} />
            <Skeleton className={st.bigButton} />
            <Skeleton className={st.smallButton} />
          </div>
          <Skeleton className={st.watchNow} />
          <div className={st.listButtonRow}>
            <Skeleton className={cn(st.smallButton, st.smallButton_mobile)} />
          </div>
        </div>
      </div>
    </>
  )
}

export { FastFindLoading }
