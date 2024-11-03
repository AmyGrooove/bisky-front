import { useContext } from "react"

import { ModalContext } from "@widgets/ModalProvider"

const useErrorPage = () => {
  const { setModal } = useContext(ModalContext)

  return { setModal }
}

export { useErrorPage }
