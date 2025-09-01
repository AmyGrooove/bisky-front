import { useAuthGate } from '@entities/auth/hooks/useAuthGate'

const useSettingsButton = () => {
  const { guardLink } = useAuthGate()

  return { guardLink }
}

export { useSettingsButton }
