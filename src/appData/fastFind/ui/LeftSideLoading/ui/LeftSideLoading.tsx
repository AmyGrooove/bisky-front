import { Skeleton } from "@shared/ui/atoms"

import st from "./LeftSideLoading.module.scss"

const LeftSideLoading = () => (
  <div className={st.root}>
    <div className={st.labelWrapper}>
      <Skeleton className={st.label} />
      <Skeleton className={st.label} />
    </div>
    <div className={st.additionInfo}>
      <div className={st.mainInfo}>
        <Skeleton className={st.infoText} />
        <Skeleton className={st.infoText} />
        <Skeleton className={st.infoText} />
        <Skeleton className={st.infoText} />
        <Skeleton className={st.infoText} />
      </div>
      <div className={st.miniInfo}>
        <Skeleton className={st.miniInfoButton} />
        <Skeleton className={st.miniInfoButton} />
      </div>
    </div>
    <div className={st.screenshotsWrapper}>
      <Skeleton className={st.screenshotsLabel} />
      <div className={st.screenshotsBlock}>
        <Skeleton className={st.screenshots} />
        <Skeleton className={st.screenshots} />
      </div>
    </div>
  </div>
)

export { LeftSideLoading }
