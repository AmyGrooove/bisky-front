import { cookies } from 'next/headers'

const useIsMobileServer = async () => {
  const isMobile = (await cookies()).get('isMobile')?.value === '1'

  return { isMobile }
}

export { useIsMobileServer }
