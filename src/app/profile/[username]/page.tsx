import {
  IProfilePageProps,
  ProfileHeader,
  profilePageStyles as st,
} from "@appData/profile"
import { getCurrentUserData } from "@appData/profile/api"

const ProfilePage = async (props: IProfilePageProps) => {
  const {
    params: { username },
  } = props

  const userData = await getCurrentUserData({ username })

  return (
    <div className={st.root}>
      <ProfileHeader userData={userData} />
    </div>
  )
}

export default ProfilePage
