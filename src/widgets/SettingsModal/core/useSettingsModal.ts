import { useState } from 'react'
import st from './SettingsModal.module.scss'
import { getSettingsTabs } from '../static/getSettingsTabs'
import { cn } from '@shared/utils/functions'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { ISettingsModalProps } from '../types/ISettingsModalProps'
import { useSession } from '@entities/auth/hooks/useSession'

const useSettingsModal = (props: ISettingsModalProps) => {
  const { defaultActiveTab = 1 } = props

  const { user } = useSession()

  const isMobile = useIsMobile()

  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const [isTabSelected, setIsTabSelected] = useState(false)

  const settingsTabs = getSettingsTabs({
    warningClassName: cn(st.warning, {
      [st.warning_active]: activeTab === 0 || activeTab === 5,
    }),
    isTemporary: user?.isTemporary ?? true,
  })

  const selectActiveTab = (index: number) => {
    setActiveTab(index)
    setIsTabSelected(true)
  }

  const goBack = () => {
    setIsTabSelected(false)
  }

  return {
    settingsTabs,
    activeTab,
    setActiveTab,
    selectActiveTab,
    isTabSelected,
    goBack,
    isMobile,
  }
}

export { useSettingsModal }
