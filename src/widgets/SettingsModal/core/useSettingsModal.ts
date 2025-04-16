import { useMemo, useState } from 'react'
import { cn } from '@shared/utils/functions'
import { useIsMobile } from '@shared/utils/hooks/useIsMobile'
import { useSession } from '@entities/auth/hooks/useSession'

import { ISettingsModalProps } from '../types/ISettingsModalProps'
import { getSettingsTabs } from '../static/getSettingsTabs'

import st from './SettingsModal.module.scss'

const useSettingsModal = (props: ISettingsModalProps) => {
  const { defaultActiveTab = 1 } = props

  const { user } = useSession()

  const isMobile = useIsMobile()

  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const [isTabSelected, setIsTabSelected] = useState(false)

  const settingsTabs = useMemo(
    () =>
      getSettingsTabs({
        warningClassName: cn(st.warning, {
          [st.warning_active]: activeTab === 0 || activeTab === 5,
        }),
        isTemporary: user?.isTemporary ?? true,
        isMobile: isMobile,
      }),
    [user, activeTab, isMobile],
  )

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
