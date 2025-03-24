import { useCreateSignInToken } from '@entities/auth/api/createSignInToken'
import { useState } from 'react'

const useQRDesktop = () => {
  const [isQRHidden, setIsQRHidden] = useState(true)

  const { data: newToken = 'placeholder', isLoading } =
    useCreateSignInToken(isQRHidden)

  const isQRActive = !isQRHidden && !isLoading

  return { newToken, isQRActive, setIsQRHidden }
}

export { useQRDesktop }
