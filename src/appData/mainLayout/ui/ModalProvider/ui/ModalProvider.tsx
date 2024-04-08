import { createContext, ReactNode, useEffect, useState } from "react"

import { cn } from "@shared/utils/functions"
import { CrossIcon } from "@shared/icons"

import { IModalProviderProps } from "../types/IModalProviderProps"
import { IModalContext } from "../types/IModalContext"

import st from "./ModalProvider.module.scss"

const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  closeModal: () => {},
})

const ModalProvider = (props: IModalProviderProps) => {
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

  useEffect(() => {
    if (document && !!modal) {
      document.body.style.overflow = "hidden"
      document.body.style.marginRight = "12px"
    }
  }, [modal])

  return (
    <ModalContext.Provider
      value={{
        setModal: (value: ReactNode | null) => setModal(value),
        closeModal,
      }}
    >
      {!!modal && (
        <div
          className={cn(st.root, { [st.root_closing]: isModalClosing })}
          onMouseDown={closeModal}
        >
          <div
            onMouseDown={(event) => event.stopPropagation()}
            className={cn(st.modalWrapper, {
              [st.modalWrapper_closing]: isModalClosing,
            })}
          >
            {modal}
          </div>
          <CrossIcon
            className={cn(st.icon, { [st.icon_closing]: isModalClosing })}
          />
        </div>
      )}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }
