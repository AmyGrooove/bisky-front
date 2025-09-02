import { useAuthGate } from '@entities/auth/hooks/useAuthGate'
import { isNil } from '@shared/utils/functions'

const useUnauthorized = () => {
  const { guardCall } = useAuthGate()

  const authorizeAndRefresh = guardCall(() => {
    if (!isNil(location)) {
      location.reload()
    }
  })

  return { authorizeAndRefresh }
}

export { useUnauthorized }
