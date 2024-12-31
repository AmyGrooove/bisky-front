import { MouseEvent } from "react"

import {
  addUpdateAnimeFromList,
  removeAnimeFromList,
  updateAnimeScoreInList,
} from "@entities/AnimeEstimate/api"
import { TListStatus } from "@entities/AnimeEstimate"

import { IAddInListMenuProps } from "../types/IAddInListMenuProps"
import { watchStatuses } from "../static/watchStatuses"
import { excludeStatuses } from "../static/excludeStatuses"

const useAddInListMenu = (props: IAddInListMenuProps) => {
  const {
    _id,
    currentUserStatus = null,
    onChange,
    animeStatus = "released",
  } = props

  const filteredWatchStatuses = watchStatuses
    .filter((item) => item !== currentUserStatus)
    .filter((item) => !excludeStatuses(animeStatus).includes(item))
    .filter((item) => !(currentUserStatus === "setWatch" && item === "cancel"))

  const updateListStatus = async (
    value: TListStatus,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation()

    if (value === "cancel") await removeAnimeFromList({ animeId: _id ?? "" })
    else
      await addUpdateAnimeFromList({ animeId: _id ?? "", animeStatus: value })

    if (value === "added")
      await updateAnimeScoreInList({ animeId: _id ?? "", animeScore: null })

    if (onChange) onChange(value)
  }

  return { updateListStatus, filteredWatchStatuses }
}

export { useAddInListMenu }
