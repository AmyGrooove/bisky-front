'use client'

import { isNil } from '@shared/utils/functions'
import { UserLoading } from '../../UserLoading'
import { UserHeader } from './UserHeader/UserHeader'
import { useUserPage } from './useUserPage'
import { UserActivity } from './UserActivity/UserActivity'
import st from './UserPage.module.scss'

const UserPage = () => {
  const { data, isLoading } = useUserPage()

  if (isNil(data) || isLoading) return <UserLoading />

  return (
    <>
      <UserHeader data={data} />
      <UserActivity data={data} />
      <div className={st.barMargin} />
    </>
  )
}

export { UserPage }
