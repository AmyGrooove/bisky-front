'use client'

import { Skeleton } from '@shared/ui/atoms/Skeleton'
import st from './UserLoading.module.scss'

const UserLoading = () => {
  return (
    <>
      <Skeleton className={st.header} />
    </>
  )
}

export { UserLoading }
