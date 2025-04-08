'use client'

import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { CrownIcon } from '@shared/icons'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import st from './FastStarLoading.module.scss'

const FastStarLoading = () => {
  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={CrownIcon}>
        Быстрая оценка
      </SectionLabel>
      <div className={st.root}>
        <Skeleton className={st.mainBlock} />
      </div>
      <div className={st.mobileControl}>
        <Skeleton className={st.button} />
      </div>
    </>
  )
}

export { FastStarLoading }
