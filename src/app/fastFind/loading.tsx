"use client"

import { Skeleton } from "@shared/ui/atoms"
import { LeftSideLoading, fastFindLoadingStyles as st } from "@appData/fastFind"

const FastFindLoading = () => (
  <div className={st.root}>
    <LeftSideLoading />
    <div className={st.rightSide}>
      <Skeleton className={st.setStatuses} />
      <Skeleton className={st.poster} />
      <div className={st.mainButtons}>
        <Skeleton className={st.miniButton} />
        <Skeleton className={st.bigButton} />
        <Skeleton className={st.bigButton} />
        <Skeleton className={st.miniButton} />
      </div>
      <Skeleton className={st.watchNowButton} />
    </div>
  </div>
)

export default FastFindLoading
