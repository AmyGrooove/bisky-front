import { useCreateSignInToken } from '@entities/auth/api/createSignInToken'
import { useState } from 'react'

const useQRDesktop = () => {
  const [isQRHidden, setIsQRHidden] = useState(true)

  const { data, isLoading } = useCreateSignInToken({ enabled: isQRHidden })

  const newToken = data?.token ?? 'placeholder'

  const isQRActive = !isQRHidden && !isLoading

  return { newToken, isQRActive, setIsQRHidden }
}

export { useQRDesktop }
