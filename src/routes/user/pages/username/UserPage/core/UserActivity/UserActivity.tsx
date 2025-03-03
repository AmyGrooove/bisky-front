import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import st from './UserActivity.module.scss'
import { IUserSectionProps } from '../../types/IUserSectionProps'
import { HistoryTab } from './HistoryTab/HistoryTab'
import { useUserActivity } from './useUserActivity'

const UserActivity = (props: IUserSectionProps) => {
  const { isMobile, activeTab, setActiveTab } = useUserActivity(props)

  return (
    <div className={st.root}>
      <SectionSelector
        items={[
          { children: 'Основное', isDisabled: !isMobile },
          { children: 'Избранное' },
          { children: 'История' },
        ]}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        className={st.selector}
      />
      {activeTab === 2 && <HistoryTab />}
    </div>
  )
}

export { UserActivity }
