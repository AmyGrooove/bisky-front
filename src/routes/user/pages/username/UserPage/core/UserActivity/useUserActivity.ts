import { useState } from 'react'
import { IUserSectionProps } from '../../types/IUserSectionProps'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'

const useUserActivity = (props: IUserSectionProps) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props

  const isMobile = useIsMobile()

  const [activeTab, setActiveTab] = useState(isMobile ? 0 : 1)

  return { isMobile, activeTab, setActiveTab }
}

export { useUserActivity }
