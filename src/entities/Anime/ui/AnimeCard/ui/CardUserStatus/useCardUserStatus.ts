import { useState } from "react"

import { TListStatus } from "@entities/AnimeEstimate"

import { ICardUserStatusProps } from "../../types/ICardUserStatusProps"

const useCardUserStatus = (props: ICardUserStatusProps) => {
  const { userStatus = null, _id, className } = props

  const [currentStatus, setCurrentStatus] = useState<TListStatus>(
    userStatus ?? "setWatch",
  )

  const changeStatus = (newStatus?: TListStatus) => {
    if (newStatus)
      setCurrentStatus(newStatus === "cancel" ? "setWatch" : newStatus)
  }

  return { userStatus: currentStatus, _id, className, changeStatus }
}

export { useCardUserStatus }
