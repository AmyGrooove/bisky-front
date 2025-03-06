'use client'

import { useUserListPage } from './useUserListPage'
import { ListSections } from './ListSections/ListSections'
import st from './UserListPage.module.scss'
import { ProfileListLeft } from './ProfileListLeft/ProfileListLeft'

const UserListPage = () => {
  useUserListPage()

  return (
    <div className={st.root}>
      <ProfileListLeft />
      <ListSections />
    </div>
  )
}

export { UserListPage }
