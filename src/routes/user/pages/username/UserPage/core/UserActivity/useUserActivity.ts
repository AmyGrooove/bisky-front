import { useEffect, useState } from 'react'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'

const useUserActivity = () => {
  const isMobile = useIsMobile()

  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    if (isMobile) setActiveTab(0)
  }, [isMobile])

  return { isMobile, activeTab, setActiveTab }
}

export { useUserActivity }
