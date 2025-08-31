import { useIsMobileServer } from '@shared/utils/hooks/useIsMobileServer'

const useSupportPage = async () => {
  const { isMobile } = await useIsMobileServer()

  return { isMobile }
}

export { useSupportPage }
