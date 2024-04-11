import { IStartFormProps } from "./IStartFormProps"

interface ILoginFormProps extends IStartFormProps {
  password: string
  closeModal: () => void
}

export type { ILoginFormProps }
