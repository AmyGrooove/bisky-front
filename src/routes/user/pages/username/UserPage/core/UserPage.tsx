'use client'

import { isNil } from '@shared/utils/functions'
import { UserLoading } from '../../UserLoading'
import { UserHeader } from './UserHeader/UserHeader'
import { useUserPage } from './useUserPage'
import { UserActivity } from './UserActivity/UserActivity'
import st from './UserPage.module.scss'
import { InfoTab } from './UserActivity/InfoTab/InfoTab'

const UserPage = () => {
  const { data, isLoading } = useUserPage()

  if (isNil(data) || isLoading) return <UserLoading />

  return (
    <>
      <UserHeader data={data} />
      <div className={st.main}>
        <InfoTab className={st.infoTab} />
        <UserActivity data={data} />
      </div>
    </>
  )
}

export { UserPage }
