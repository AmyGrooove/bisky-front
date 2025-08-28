import { useIsMobileServer } from '@shared/utils/hooks/useIsMobileServer'

const useMainLoading = async () => {
  const { isMobile } = await useIsMobileServer()

  const currentVariant: 'small' | 'big' = isMobile ? 'small' : 'big'

  return { currentVariant }
}

export { useMainLoading }
