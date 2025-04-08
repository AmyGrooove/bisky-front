'use client'

import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { CrownIcon } from '@shared/icons'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import st from './FastSelectLoading.module.scss'

const FastSelectLoading = () => {
  return (
    <>
      <SectionLabel className={st.sectionLabel} Icon={CrownIcon}>
        Быстрый выбор
      </SectionLabel>
      <div className={st.root}>
        <Skeleton className={st.mainBlock} />
      </div>
      <div className={st.mobileControl}>
        <Skeleton className={st.backButton} />
        <Skeleton className={st.counter} />
        <div className={st.emptyControl} />
      </div>
    </>
  )
}

export { FastSelectLoading }
