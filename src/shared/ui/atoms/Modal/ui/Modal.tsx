import { useContext, useEffect, useState } from "react"

import { ModalContext } from "@appData/mainLayout/ui/ModalProvider"
import { cn } from "@shared/utils/functions"
import { CrossIcon } from "@shared/icons"

import { IModalProps } from "../types/IModalProps"

import st from "./Modal.module.scss"

const Modal = (props: IModalProps) => {
  const { children, className } = props

  const { setModal, isModalOpened } = useContext(ModalContext)

  const [isModalCLosing, setIsModalClosing] = useState(false)

  const closeModal = () => {
    setIsModalClosing(true)

    setTimeout(() => {
      setModal(null)
      document.body.style.overflow = ""
    }, 100)
  }

  useEffect(() => {
    if (document && isModalOpened) document.body.style.overflow = "hidden"
  }, [isModalOpened])

  return (
    <div
      className={cn(st.root, { [st.root_closing]: isModalCLosing })}
      onClick={closeModal}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={cn(st.modalWrapper, className, {
          [st.modalWrapper_closing]: isModalCLosing,
        })}
      >
        {children}
      </div>
      <CrossIcon
        className={cn(st.icon, { [st.icon_closing]: isModalCLosing })}
      />
    </div>
  )
}

export { Modal }
