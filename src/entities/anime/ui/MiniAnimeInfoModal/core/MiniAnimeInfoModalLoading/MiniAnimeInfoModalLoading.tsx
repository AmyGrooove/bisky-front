'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { cn, getEmptyArray } from '@shared/utils/functions'

import { IMiniAnimeInfoModalLoadingProps } from '../../types/IMiniAnimeInfoModalLoadingProps'

import st from './MiniAnimeInfoModalLoading.module.scss'
import { useMiniAnimeInfoModalLoading } from './useMiniAnimeInfoModalLoading'

const MiniAnimeInfoModalLoading = (props: IMiniAnimeInfoModalLoadingProps) => {
  const { className } = useMiniAnimeInfoModalLoading(props)

  return (
    <>
      <div className={cn(st.root, className)}>
        <Skeleton className={st.info} />
        <div className={st.screenshotWrapper}>
          {getEmptyArray(3).map((_, index) => (
            <Skeleton key={index} className={st.screenshot} />
          ))}
        </div>
        <Skeleton className={st.watchNow} />
      </div>
    </>
  )
}

export { MiniAnimeInfoModalLoading }
