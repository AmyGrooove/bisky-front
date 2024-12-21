import {
  IProfilePageProps,
  ProfileHeader,
  profilePageStyles as st,
  UserAnimeStats,
} from "@appData/profile"
import { getCurrentUserData } from "@appData/profile/api"

const ProfilePage = async (props: IProfilePageProps) => {
  const { username } = await props.params

  const userData = await getCurrentUserData({ username })

  return (
    <div className={st.root}>
      <ProfileHeader userData={userData} />
      <div className={st.main}>
        <UserAnimeStats userData={userData} />
      </div>
    </div>
  )
}

export default ProfilePage
