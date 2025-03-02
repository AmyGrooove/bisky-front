'use client'

import { Text } from '@shared/ui/atoms/Text'
import { useUserListPage } from './useUserListPage'

const UserListPage = () => {
  useUserListPage()

  return <Text>Страница в разработке</Text>
}

export { UserListPage }
