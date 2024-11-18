import { useRef } from "react"

import { IDropdownRef } from "@shared/ui/atoms"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"

const useAddListButton = (props: IAddListButtonProps) => {
  const { _id, updateUserData, userAnimeStatus, animeStatus } = props

  const addListButtonsRef = useRef<IDropdownRef>(null)

  const updateListStatus = async () => {
    addListButtonsRef.current?.closeMenu()

    await updateUserData()
  }

  return {
    addListButtonsRef,
    userAnimeStatus,
    _id,
    updateListStatus,
    animeStatus,
  }
}

export { useAddListButton }
