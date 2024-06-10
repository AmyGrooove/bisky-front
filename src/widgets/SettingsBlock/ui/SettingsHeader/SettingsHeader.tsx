import { CropImage } from "@shared/ui/atoms"
import { updateAvatar, updateBackground } from "@entities/User/api"

import { ISettingsHeaderProps } from "../../types/ISettingsHeaderProps"

import st from "./SettingsHeader.module.scss"

const SettingsHeader = (props: ISettingsHeaderProps) => {
  const { avatar, background, setIsLoading } = props

  const uploadAvatar = async (value: FormData) => {
    setIsLoading(true)
    await updateAvatar(value).then(() => location.reload())
  }

  const uploadBackground = async (value: FormData) => {
    setIsLoading(true)
    await updateBackground(value).then(() => location.reload())
  }

  return (
    <div className={st.root}>
      <CropImage
        imgLink={background}
        width={600}
        height={120}
        uploadFunction={uploadBackground}
        imageClassName={st.backgroundImage}
        pointClassName={st.backgroundPoint}
        aspect={4 / 1}
      />
      <CropImage
        imgLink={avatar}
        width={120}
        height={120}
        uploadFunction={uploadAvatar}
        imageClassName={st.avatarImage}
        pointClassName={st.avatarPoint}
      />
    </div>
  )
}

export { SettingsHeader }
