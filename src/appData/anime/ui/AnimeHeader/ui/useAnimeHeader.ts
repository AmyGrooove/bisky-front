import { useContext, useMemo } from "react"

import { getRandomInt } from "@shared/utils/functions"
import { ModalContext } from "@widgets/ModalProvider"

import { IAnimeHeaderProps } from "../types/IAnimeHeaderProps"

const useAnimeHeader = (props: IAnimeHeaderProps) => {
  const { animeData, className, ...otherProps } = props

  const { setModal } = useContext(ModalContext)

  const randomBackgroundSrc = useMemo(
    () =>
      animeData.screenshots?.[getRandomInt(animeData.screenshots.length - 1)] ??
      animeData.poster ??
      "",
    [animeData],
  )

  return { animeData, className, otherProps, randomBackgroundSrc, setModal }
}

export { useAnimeHeader }
