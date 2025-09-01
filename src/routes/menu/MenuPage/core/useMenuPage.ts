import { getRandomFact } from '@entities/fact/api/getRandomFact'
import { useIsMobileServer } from '@shared/utils/hooks/useIsMobileServer'

const useMenuPage = async () => {
  const randomFact = await getRandomFact()
  const { isMobile } = await useIsMobileServer()

  const pageVariant: 'small' | 'big' = isMobile ? 'small' : 'big'

  return { randomFact, pageVariant }
}

export { useMenuPage }
