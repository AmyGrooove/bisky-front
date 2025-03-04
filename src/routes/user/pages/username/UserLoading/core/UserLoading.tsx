'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import st from './UserLoading.module.scss'

const UserLoading = () => {
  return (
    <>
      <Skeleton className={st.header} />
      <div className={st.main}>
        <div className={st.left}>
          <Skeleton />
          <Skeleton />
        </div>
        <Skeleton className={st.info} />
      </div>
    </>
  )
}

export { UserLoading }
