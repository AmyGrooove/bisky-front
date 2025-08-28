import { getInitialHomeData } from '@entities/home/api/getInitialHomeData'
import { useIsMobileServer } from '@shared/utils/hooks/useIsMobileServer'

const useMainPage = async () => {
  const homeData = await getInitialHomeData()

  const { isMobile } = await useIsMobileServer()

  return { homeData, isMobile }
}

export { useMainPage }
