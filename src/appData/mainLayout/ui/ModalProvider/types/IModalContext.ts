import { ReactNode } from "react"

interface IModalContext {
  setModal: (value: ReactNode) => void
  closeModal: () => void
}

export type { IModalContext }
