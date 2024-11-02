import { CropImage } from "@shared/ui/atoms"

import { ISettingsHeaderProps } from "../../types/ISettingsHeaderProps"

import st from "./SettingsHeader.module.scss"
import { useSettingsHeader } from "./useSettingsHeader"

const SettingsHeader = (props: ISettingsHeaderProps) => {
  const { background, uploadBackground, uploadAvatar, avatar } =
    useSettingsHeader(props)

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
