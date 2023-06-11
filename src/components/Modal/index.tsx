"use client"

import { ReactNode } from "react"

import style from "./index.module.scss"
import { ModalContext, useModal } from "./index.use"

interface IModal {
  children: ReactNode
}

const Modal = ({ children }: IModal) => {
  const { modal, close, setModal, handleCloseModal } = useModal()

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
            {/* <AppImage src={CLOSE_ICON} height={60} width={60} /> */}
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
