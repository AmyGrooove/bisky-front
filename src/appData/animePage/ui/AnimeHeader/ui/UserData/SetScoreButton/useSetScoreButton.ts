import { useRef } from "react"

import { updateAnimeScoreInList } from "@entities/AnimeEstimate/api"
import { IDropdownRef } from "@shared/ui/atoms"

import { ISetScoreButtonProps } from "../../../types/ISetScoreButtonProps"

const useSetScoreButton = (props: ISetScoreButtonProps) => {
  const { _id, animeScore, updateUserData } = props

  const addListButtonsRef = useRef<IDropdownRef>(null)

  const updateListStatus = async (value: number | null) => {
    addListButtonsRef.current?.closeMenu()

    if (animeScore === value) return

    await updateAnimeScoreInList({
      animeId: _id ?? "",
      animeScore: value,
    })

    await updateUserData()
  }

  return { updateListStatus, addListButtonsRef }
}

export { useSetScoreButton }
