import { signIn } from "next-auth/react"
import { useState } from "react"

import { ILoginFormProps } from "@widgets/AuthBlock/types/ILoginFormProps"

const useLoginForm = (props: ILoginFormProps) => {
  const { login, password, closeModal } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const isCanGoLogin = login.length >= 3 && password.length >= 6

  const callLoginUser = async () => {
    setIsError(false)
    setIsLoading(true)

    const result = await signIn("credentials", {
      redirect: false,
      username: login,
      password,
    })

    if (result?.status === 200) closeModal()
    else setIsError(true)

    setIsLoading(false)
  }

  return { isLoading, isError, isCanGoLogin, callLoginUser }
}

export { useLoginForm }
