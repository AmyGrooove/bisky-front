import { useEffect, useState } from 'react'
import { IUserSectionProps } from '../../types/IUserSectionProps'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'

const useUserActivity = (props: IUserSectionProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props

  const isMobile = useIsMobile()

  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    if (isMobile) setActiveTab(0)
  }, [isMobile])

  return { isMobile, activeTab, setActiveTab }
}

export { useUserActivity }
