'use client'

import { SettingsIcon } from '@shared/icons'
import { Text } from '@shared/ui/atoms/Text'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'
import { SectionSelector } from '@shared/ui/organisms/SectionSelector'
import { getEmptyArray, isNil } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'

import { SETTINGS_SECTIONS } from '../static/SETTINGS_SECTIONS'

import st from './SettingsPage.module.scss'
import { useSettingsPage } from './useSettingsPage'
import { ProfileTab } from './ProfileTab'

const SettingsPage = () => {
  const { isMobile, data, isLoading, activeTab, switchTab } = useSettingsPage()

  return (
    <div className={st.root}>
      {isMobile ? (
        <SectionLabel Icon={<SettingsIcon />}>Настройки</SectionLabel>
      ) : (
        <Text weight="700" className={st.label}>
          Настройки
        </Text>
      )}
      <div className={st.main}>
        <div className={st.barWrapper}>
          <SectionSelector
            variant="static"
            orientation="vertical"
            items={SETTINGS_SECTIONS}
            activeTab={activeTab}
            onSwitchTab={switchTab}
            className={st.bar}
          />
          <Text weight="700" className={st.temporary}>
            Временный
          </Text>
        </div>
        <div className={st.settingItem}>
          {isLoading || isNil(data) ? (
            getEmptyArray(4).map((_, index) => (
              <Skeleton key={index} templates="none" className={st.skeleton} />
            ))
          ) : (
            <>{activeTab === 'profile' && <ProfileTab data={data} />}</>
          )}
        </div>
      </div>
    </div>
  )
}

export { SettingsPage }
