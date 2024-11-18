import { useState } from "react"

import { EListStatus } from "@entities/AnimeEstimate"

import { ICardUserStatusProps } from "../../types/ICardUserStatusProps"

const useCardUserStatus = (props: ICardUserStatusProps) => {
  const { userStatus = null, _id, className } = props

  const [currentStatus, setCurrentStatus] = useState<keyof typeof EListStatus>(
    userStatus ?? "setWatch",
  )

  const changeStatus = (newStatus?: keyof typeof EListStatus) => {
    if (newStatus)
      setCurrentStatus(newStatus === "cancel" ? "setWatch" : newStatus)
  }

  return { userStatus: currentStatus, _id, className, changeStatus }
}

export { useCardUserStatus }
