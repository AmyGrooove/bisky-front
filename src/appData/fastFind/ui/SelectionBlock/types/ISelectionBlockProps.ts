import { Dispatch, SetStateAction } from "react"

import { IAnimeFullModel } from "@entities/Anime"

interface ISelectionBlockProps {
  currentAnime: IAnimeFullModel
  fastFindCount: number
  setCurrentAnime: Dispatch<SetStateAction<number>>
  setIsChangingAnime: Dispatch<SetStateAction<boolean>>
  isChangingAnime: boolean
}

export type { ISelectionBlockProps }
