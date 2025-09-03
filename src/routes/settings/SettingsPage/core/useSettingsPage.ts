import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useState } from 'react'
import { useGetCurrentAccountFullData } from '@entities/account/api/getCurrentAccountFullData'

import { TSettingsSectionsValue } from '../types/TSettingsSectionsValue'

const useSettingsPage = () => {
  const { isMobile } = useIsMobile()

  const [activeTab, setActiveTab] = useState<TSettingsSectionsValue>('profile')

  const { data, isLoading } = useGetCurrentAccountFullData()

  const switchTab = (value: string) => {
    setActiveTab(value as TSettingsSectionsValue)
  }

  return { isMobile, data, isLoading, activeTab, switchTab }
}

export { useSettingsPage }
