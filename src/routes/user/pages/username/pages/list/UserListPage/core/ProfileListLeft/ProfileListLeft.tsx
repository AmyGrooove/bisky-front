import st from './ProfileListLeft.module.scss'

import { UserBlock } from './UserBlock/UserBlock'
import { ListSection } from './ListSection/ListSection'

const ProfileListLeft = () => {
  return (
    <div className={st.root}>
      <UserBlock />
      <ListSection />
    </div>
  )
}

export { ProfileListLeft }
