import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react"

import { CLOSE_ICON } from "@/theme/sources"

import AmyImage from "../AmyImage"

import style from "./index.module.scss"

interface IModal {
  children: ReactNode
}

interface IModalContext {
  setModal: Dispatch<SetStateAction<ReactNode>>
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  closeModal: () => {},
})

const Modal = ({ children }: IModal) => {
  const [modal, setModal] = useState<ReactNode>(null)
  const [close, setClose] = useState(false)

  const handleCloseModal = () => {
    setClose(true)

    setTimeout(() => {
      setModal(null)
      setClose(false)
    }, 190)
  }

  return (
    <ModalContext.Provider value={{ setModal, closeModal: handleCloseModal }}>
      {children}
      {modal && (
        <div className={`${style.modal} ${close && style.modal_close}`}>
          <div className={style.modal__block}>{modal}</div>
          <span
            aria-hidden
            onClick={handleCloseModal}
            className={style.modal__closeIcon}
          >
            <AmyImage src={CLOSE_ICON} height={60} width={60} />
          </span>
          <span
            aria-hidden
            onClick={handleCloseModal}
            className={style.modal__back}
          />
        </div>
      )}
    </ModalContext.Provider>
  )
}

export default Modal
