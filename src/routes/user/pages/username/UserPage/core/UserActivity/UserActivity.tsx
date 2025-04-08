import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import { HeartIcon, HistoryIcon, InfoIcon } from '@shared/icons'

import st from './UserActivity.module.scss'
import { HistoryTab } from './HistoryTab/HistoryTab'
import { FavoriteTab } from './FavoriteTab/FavoriteTab'
import { useUserActivity } from './useUserActivity'
import { InfoTab } from './InfoTab/InfoTab'

const UserActivity = () => {
  const { isMobile, activeTab, setActiveTab } = useUserActivity()

  return (
    <div className={st.root}>
      <SectionSelector
        items={[
          { Icon: InfoIcon, children: 'Основное', isDisabled: !isMobile },
          { Icon: HeartIcon, children: 'Избранное' },
          { Icon: HistoryIcon, children: 'История' },
        ]}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        className={st.selector}
      />
      <div className={st.main}>
        {activeTab === 0 && <InfoTab />}
        {activeTab === 1 && <FavoriteTab />}
        {activeTab === 2 && <HistoryTab />}
        <div className={st.barMargin} />
      </div>
    </div>
  )
}

export { UserActivity }
