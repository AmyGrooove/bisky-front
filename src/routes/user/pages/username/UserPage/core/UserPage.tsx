'use client'

import { isNil } from '@shared/utils/functions'
import { UserLoading } from '../../UserLoading'
import { UserHeader } from './UserHeader/UserHeader'
import { useUserPage } from './useUserPage'

const UserPage = () => {
  const { data, isLoading } = useUserPage()

  return (
    <>
      {isNil(data) || isLoading ? (
        <UserLoading />
      ) : (
        <>
          <UserHeader data={data} />
        </>
      )}
    </>
  )
}

export { UserPage }
