import {
  useState,
  ReactNode,
  useCallback,
  useEffect,
  createContext,
} from "react"

import { IModalProviderProps } from "../types/IModalProviderProps"
import { IModalContext } from "../types/IModalContext"

const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  closeModal: () => {},
})

const useModalProvider = (props: IModalProviderProps) => {
  const { children } = props

  const [modal, setModal] = useState<ReactNode | null>(null)

  const [isModalClosing, setIsModalClosing] = useState(false)

  const closeModal = () => {
    setIsModalClosing(true)

    setTimeout(() => {
      setModal(null)
      setIsModalClosing(false)
      document.body.style.overflow = ""
      document.body.style.marginRight = ""
    }, 100)
  }

  const escClose = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") closeModal()
  }, [])

  useEffect(() => {
    if (document && !!modal) {
      document.body.style.overflow = "hidden"
      document.body.style.marginRight = "12px"
    }
  }, [modal])

  useEffect(() => {
    document.addEventListener("keydown", escClose, false)

    return () => document.removeEventListener("keydown", escClose, false)
  }, [])

  return { closeModal, setModal, modal, isModalClosing, children }
}

export { useModalProvider, ModalContext }
