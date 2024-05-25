import { Skeleton } from "@shared/ui/atoms"

import st from "./SettingsLoading.module.scss"

const SettingsLoading = () => (
  <div className={st.root}>
    <Skeleton className={st.row} />
    <Skeleton className={st.row} />
    <Skeleton className={st.row} />
    <Skeleton className={st.row} />
  </div>
)

export { SettingsLoading }
