import { getInitialHomeData } from '@entities/home/api/getInitialHomeData'

const useMainPage = async () => {
  const homeData = await getInitialHomeData()

  return { homeData }
}

export { useMainPage }
