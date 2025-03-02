'use client'

import { isNil } from '@shared/utils/functions'
import { UserLoading } from '../../UserLoading'
import { UserHeader } from './UserHeader/UserHeader'
import { useUserPage } from './useUserPage'
import { Text } from '@shared/ui/atoms/Text'

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
      <Text>Страница в разработке</Text>{' '}
    </>
  )
}

export { UserPage }
