import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useState,
} from "react"

interface IModalContext {
  setModal: Dispatch<SetStateAction<ReactNode>>
  closeModal: () => void
}

const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  closeModal: () => {},
})

const useModal = () => {
  const [modal, setModal] = useState<ReactNode>(null)
  const [close, setClose] = useState(false)

  const handleCloseModal = () => {
    setClose(true)

    setTimeout(() => {
      setModal(null)
      setClose(false)
    }, 190)
  }

  return { modal, close, setModal, handleCloseModal }
}

export { useModal, ModalContext }
