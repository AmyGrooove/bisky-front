import { useRef } from "react"

import { EListStatus } from "@entities/AnimeEstimate"
import {
  removeAnimeFromList,
  addUpdateAnimeFromList,
  updateAnimeScoreInList,
} from "@entities/AnimeEstimate/api"
import { IDropdownRef } from "@shared/ui/atoms"

import { IAddListButtonProps } from "../../../types/IAddListButtonProps"

const useAddListButton = (props: IAddListButtonProps) => {
  const { _id, updateUserData } = props

  const addListButtonsRef = useRef<IDropdownRef>(null)

  const updateListStatus = async (value: EListStatus) => {
    addListButtonsRef.current?.closeMenu()

    if (value === "cancel") await removeAnimeFromList({ animeId: _id ?? "" })
    else
      await addUpdateAnimeFromList({ animeId: _id ?? "", animeStatus: value })

    if (value === "added")
      await updateAnimeScoreInList({ animeId: _id ?? "", animeScore: null })

    await updateUserData()
  }

  return { addListButtonsRef, updateListStatus }
}

export { useAddListButton }
