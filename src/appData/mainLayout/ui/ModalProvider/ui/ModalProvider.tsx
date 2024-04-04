import { createContext, ReactNode, useState } from "react"

import { IModalProviderProps } from "../types/IModalProviderProps"
import { IModalContext } from "../types/IModalContext"

const ModalContext = createContext<IModalContext>({
  setModal: () => {},
  isModalOpened: false,
})

const ModalProvider = (props: IModalProviderProps) => {
  const { children } = props

  const [modal, setModal] = useState<ReactNode | null>(null)

  return (
    <ModalContext.Provider
      value={{
        setModal: (value: ReactNode | null) => setModal(value),
        isModalOpened: !!modal,
      }}
    >
      {!!modal && modal}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }
