"use client"

import { ReactNode } from "react"

import { cl } from "@/utils"
import IconButton from "@/components/common/IconButton"
import Title from "@/components/common/Title"
import { CrossIcon } from "@/components/icons"

import styles from "./index.module.scss"
import { ModalContext, useModal } from "./index.use"

interface IModal {
  children: ReactNode
}

const Modal = ({ children }: IModal) => {
  const { modal, icon, title, close, handleSetModal, handleCloseModal } =
    useModal()

  return (
    <ModalContext.Provider
      value={{ setModal: handleSetModal, closeModal: handleCloseModal }}
    >
      {modal && (
        <div className={styles.modal}>
          <span
            className={cl(
              styles.modal__background,
              close && styles.modal__background_close,
            )}
            onClick={handleCloseModal}
          />
          <div
            className={cl(
              styles.modal__container,
              close && styles.modal__container_close,
            )}
          >
            <div
              className={cl(
                styles.modal__container__header,
                !title && styles.modal__container__header_noTitle,
              )}
            >
              {title && <Title order={2}>{title}</Title>}
              {icon && (
                <IconButton icon={<CrossIcon />} onClick={handleCloseModal} />
              )}
            </div>
            {modal}
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  )
}

export default Modal
