import { IProfilePageProps, profileStyles as st } from "@appData/profile"
import { getCurrentUserData } from "@appData/profile/api"

const ProfilePage = async (props: IProfilePageProps) => {
  const {
    params: { username },
  } = props

  const userData = await getCurrentUserData({ username })

  return <div className={st.root}></div>
}

export default ProfilePage
