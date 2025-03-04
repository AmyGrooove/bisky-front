import { cn } from '@shared/utils/functions'
import { IInfoTabProps } from '../../../types/IInfoTabProps'
import st from './InfoTab.module.scss'
import { useInfoTab } from './useInfoTab'
import { FriendsSection } from './FriendsSection/FriendsSection'

const InfoTab = (props: IInfoTabProps) => {
  const { className } = useInfoTab(props)

  return (
    <div className={cn(st.root, className)}>
      <FriendsSection />
      <div className={st.section}>В разработке</div>
    </div>
  )
}

export { InfoTab }
