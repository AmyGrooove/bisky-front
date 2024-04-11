import { ILoginFormProps } from "./ILoginFormProps"

interface IRegisterFormProps extends ILoginFormProps {
  email: string
  setEmail: (value: string) => void
}

export type { IRegisterFormProps }
