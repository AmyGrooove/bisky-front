import { updateAvatar, updateBackground } from "@entities/User/api"

import { ISettingsHeaderProps } from "../../types/ISettingsHeaderProps"

const useSettingsHeader = (props: ISettingsHeaderProps) => {
  const { avatar, background, setIsLoading } = props

  const uploadAvatar = async (value: FormData) => {
    setIsLoading(true)
    await updateAvatar(value).then(() => location.reload())
  }

  const uploadBackground = async (value: FormData) => {
    setIsLoading(true)
    await updateBackground(value).then(() => location.reload())
  }

  return { background, uploadBackground, uploadAvatar, avatar }
}

export { useSettingsHeader }
