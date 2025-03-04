import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import st from './UserActivity.module.scss'
import { IUserSectionProps } from '../../types/IUserSectionProps'
import { HistoryTab } from './HistoryTab/HistoryTab'
import { FavoriteTab } from './FavoriteTab/FavoriteTab'
import { useUserActivity } from './useUserActivity'
import { HeartIcon, HistoryIcon, InfoIcon } from '@shared/icons'

const UserActivity = (props: IUserSectionProps) => {
  const { isMobile, activeTab, setActiveTab } = useUserActivity(props)

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
      <div>
        {activeTab === 1 && <FavoriteTab />}
        {activeTab === 2 && <HistoryTab />}
      </div>
    </div>
  )
}

export { UserActivity }
