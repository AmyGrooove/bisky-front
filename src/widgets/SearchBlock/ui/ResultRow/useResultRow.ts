import { useContext } from "react"

import { ModalContext } from "@widgets/ModalProvider"

import { IResultRowProps } from "../../types/IResultRowProps"

const useResultRow = (props: IResultRowProps) => {
  const { animeData } = props

  const { closeModal } = useContext(ModalContext)

  return { animeData, closeModal }
}

export { useResultRow }
