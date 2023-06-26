import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useState,
} from "react"

interface IModalContext {
  setModal: (
    modal: ReactNode,
    title?: string | undefined,
    icon?: boolean,
  ) => void
  closeModal: () => void
}

const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  closeModal: () => {},
})

interface ModalInput {
  modal: ReactNode

  title?: string
  icon?: boolean
}

const useModal = () => {
  const [modal, setModal] = useState<ModalInput>({ modal: null })
  const [close, setClose] = useState(false)

  const handleCloseModal = () => {
    setClose(true)

    setTimeout(() => {
      setModal({ modal: null })
      setClose(false)
    }, 80)
  }

  const handleSetModal = (
    modal: ReactNode,
    title?: string,
    icon: boolean = true,
  ) => {
    setModal({ modal, icon, title })
  }

  return {
    modal: modal.modal,
    title: modal.title,
    icon: modal.icon,
    close,
    handleSetModal,
    handleCloseModal,
  }
}

export { useModal, ModalContext }
