import { useContext } from "react"

import { ModalContext } from "@widgets/ModalProvider"

import { IAdditionalInfoProps } from "../types/IAdditionalInfoProps"

const useAdditionalInfo = (props: IAdditionalInfoProps) => {
  const { currentAnime } = props

  const { setModal } = useContext(ModalContext)

  return { currentAnime, setModal }
}

export { useAdditionalInfo }
