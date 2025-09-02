import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useState } from 'react'

import { TSettingsSectionsValue } from '../types/TSettingsSectionsValue'

const useSettingsPage = () => {
  const { isMobile } = useIsMobile()

  const [activeTab, setActiveTab] = useState<TSettingsSectionsValue>('profile')

  const switchTab = (value: string) => {
    setActiveTab(value as TSettingsSectionsValue)
  }

  return { isMobile, activeTab, switchTab }
}

export { useSettingsPage }
