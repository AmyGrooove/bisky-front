import { ReactNode } from "react"

import { cn } from "@shared/utils/functions"
import { CrossIcon } from "@shared/icons"

import { IModalProviderProps } from "../types/IModalProviderProps"

import st from "./ModalProvider.module.scss"
import { useModalProvider, ModalContext } from "./useModalProvider"

const ModalProvider = (props: IModalProviderProps) => {
  const { closeModal, setModal, modal, isModalClosing, children } =
    useModalProvider(props)

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
