import { useEffect } from "react"

import { IStartFormProps } from "../../types/IStartFormProps"

const useStartForm = (props: IStartFormProps) => {
  const { changeAuthForm, login, setLogin, setPassword } = props

  useEffect(() => {
    setPassword("")
  }, [])

  return { changeAuthForm, login, setLogin }
}

export { useStartForm }
