import { useState } from "react"

import { maxFastFind } from "@appData/fastFind"
import {
  addAnimeInSkipList,
  addUpdateAnimeFromList,
  removeAnimeFromList,
  removeAnimeFromSkipList,
} from "@entities/AnimeEstimate/api"

import { EFastFindStatuses } from "../types/EFastFindStatuses"
import { ISelectionBlockProps } from "../types/ISelectionBlockProps"

const useSelectionBlock = (props: ISelectionBlockProps) => {
  const {
    isChangingAnime,
    fastFindCount,
    setCurrentAnime,
    setIsChangingAnime,
    currentAnime,
  } = props

  const [posterStatus, setPosterStatus] =
    useState<keyof typeof EFastFindStatuses>("none")

  const [previousAnimeStatuses, setPreviousAnimeStatuses] = useState<
    (keyof typeof EFastFindStatuses)[]
  >([])

  const addAnime = async (
    status: keyof typeof EFastFindStatuses,
    prevStatus: keyof typeof EFastFindStatuses | null = null,
  ) => {
    if (status === "none") return

    if (prevStatus !== null) {
      if (status === prevStatus) return
      else if (prevStatus === "skipped")
        await removeAnimeFromSkipList({ animeId: currentAnime._id })
      else await removeAnimeFromList({ animeId: currentAnime._id })
    }

    if (status === "skipped")
      await addAnimeInSkipList({ animeId: currentAnime._id })
    else
      await addUpdateAnimeFromList({
        animeId: currentAnime._id,
        animeStatus: status,
      })
  }

  const chooseStatus = (status: keyof typeof EFastFindStatuses) => {
    if (isChangingAnime) return

    setPosterStatus(status)
    setIsChangingAnime(true)

    if (previousAnimeStatuses.length <= maxFastFind - fastFindCount)
      addAnime(status)
    else addAnime(status, previousAnimeStatuses[maxFastFind - fastFindCount])

    setTimeout(() => {
      setCurrentAnime((prevState) => prevState + 1)

      setPreviousAnimeStatuses((prevState) => {
        if (prevState.length <= maxFastFind - fastFindCount)
          return [...prevState, status]
        else {
          const newAnimeStatuses = prevState

          newAnimeStatuses[maxFastFind - fastFindCount] = status
          return newAnimeStatuses
        }
      })
    }, 200)

    setTimeout(() => {
      setIsChangingAnime(false)
      setPosterStatus("none")
    }, 800)
  }

  const goBack = () => {
    if (isChangingAnime) return

    setIsChangingAnime(true)

    setCurrentAnime((prevState) => prevState - 1)

    setTimeout(() => {
      setIsChangingAnime(false)
    }, 300)
  }

  return {
    chooseStatus,
    posterStatus,
    previousAnimeStatuses,
    goBack,
    isChangingAnime,
    currentAnime,
    fastFindCount,
  }
}

export { useSelectionBlock }
