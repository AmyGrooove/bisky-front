import { CropImage } from "@shared/ui/atoms"
import { updateAvatar, updateBackground } from "@entities/User/api"

import { ISettingsHeaderProps } from "../../types/ISettingsHeaderProps"

import st from "./SettingsHeader.module.scss"

const SettingsHeader = (props: ISettingsHeaderProps) => {
  const { avatar, background, setIsLoading } = props

  const uploadAvatar = async (value: FormData) => {
    setIsLoading(true)
    await updateAvatar(value)
    setIsLoading(false)
  }

  const uploadBackground = async (value: FormData) => {
    setIsLoading(true)
    await updateBackground(value)
    setIsLoading(false)
  }

  return (
    <div className={st.root}>
      <CropImage
        imgLink={background}
        width={600}
        height={120}
        className={st.background}
        uploadFunction={uploadBackground}
        imageClassName={st.backgroundImage}
      />
      <CropImage
        imgLink={avatar}
        width={120}
        height={120}
        className={st.avatar}
        imageClassName={st.avatarImage}
        uploadFunction={uploadAvatar}
        pointClassName={st.avatarPoint}
      />
    </div>
  )
}

export { SettingsHeader }
