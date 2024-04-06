interface ILoginFormProps {
  changeAuthForm: (value: number) => void
  login: string
  setLogin: (value: string) => void
  password: string
  setPassword: (value: string) => void
  closeModal: () => void
}

export type { ILoginFormProps }
