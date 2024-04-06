interface IRegisterFormProps {
  changeAuthForm: (value: number) => void
  login: string
  setLogin: (value: string) => void
  password: string
  setPassword: (value: string) => void
  email: string
  setEmail: (value: string) => void
  closeModal: () => void
}

export type { IRegisterFormProps }
