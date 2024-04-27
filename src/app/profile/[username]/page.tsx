import { IProfilePageProps, profileStyles as st } from "@appData/profilePage"
import { getCurrentUserData } from "@appData/profilePage/api"

const ProfilePage = async (props: IProfilePageProps) => {
  const {
    params: { username },
  } = props

  const userData = await getCurrentUserData({ username })

  return <div className={st.root}></div>
}

export default ProfilePage
