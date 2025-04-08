import { SectionSelector } from '@shared/ui/molecules/SectionSelector'
import { cn } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { SectionLabel } from '@shared/ui/molecules/SectionLabel'

import { ISettingsModalProps } from '../types/ISettingsModalProps'

import { useSettingsModal } from './useSettingsModal'
import { Profile } from './Profile/Profile'
import st from './SettingsModal.module.scss'
import { Integrations } from './Integrations/Integrations'
import { Email } from './Email/Email'
import { Password } from './Password/Password'
import { Temporary } from './Temporary/Temporary'
import { Danger } from './Danger/Danger'

const SettingsModal = (props: ISettingsModalProps) => {
  const {
    settingsTabs,
    activeTab,
    setActiveTab,
    selectActiveTab,
    isTabSelected,
    goBack,
    isMobile,
  } = useSettingsModal(props)

  return (
    <div className={st.root}>
      <SectionSelector
        items={settingsTabs}
        activeTab={activeTab}
        onSwitchTab={setActiveTab}
        variant="vertical"
        className={st.desktop}
      />
      <div className={st.separator} />
      <div
        className={cn(st.buttonsWrapper, {
          [st.buttonsWrapper_hidden]: isTabSelected && isMobile,
        })}
      >
        {settingsTabs.map(({ children, Icon, className }, index) => (
          <Button
            variant="big"
            key={children}
            Icon={Icon}
            onClick={() => selectActiveTab(index)}
            className={cn(st.button, className)}
            isCustomColor
          >
            {children}
          </Button>
        ))}
      </div>
      <div
        className={cn(st.main, {
          [st.main_hidden]: !isTabSelected && isMobile,
        })}
      >
        <SectionLabel
          className={st.mobile}
          Icon={settingsTabs[activeTab].Icon}
          onClick={goBack}
        >
          {settingsTabs[activeTab].children}
        </SectionLabel>
        {activeTab === 0 && <Temporary setActiveTab={setActiveTab} />}
        {activeTab === 1 && <Profile />}
        {activeTab === 2 && <Email />}
        {activeTab === 3 && <Password setActiveTab={setActiveTab} />}
        {activeTab === 4 && <Integrations />}
        {activeTab === 5 && <Danger />}
      </div>
    </div>
  )
}

export { SettingsModal }
