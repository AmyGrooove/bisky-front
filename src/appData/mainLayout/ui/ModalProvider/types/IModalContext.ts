import { ReactNode } from "react"

interface IModalContext {
  setModal: (value: ReactNode | null) => void
  isModalOpened: boolean
}

export type { IModalContext }
