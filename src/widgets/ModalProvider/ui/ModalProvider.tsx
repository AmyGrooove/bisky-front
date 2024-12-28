import { cn } from "@shared/utils/functions"
import { CrossIcon } from "@shared/icons"

import { IModalProviderProps } from "../types/IModalProviderProps"

import st from "./ModalProvider.module.scss"
import { useModalProvider } from "./useModalProvider"

const ModalProvider = (props: IModalProviderProps) => {
  const { closeModal, modal, isModalClosing, children } =
    useModalProvider(props)

  return (
    <>
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
    </>
  )
}

export { ModalProvider }
