import { Skeleton } from "@shared/ui/atoms"

import st from "./ResultRowLoading.module.scss"

const ResultRowLoading = () => (
  <div className={st.root}>
    {[...Array(5)].map((_, index) => (
      <>
        <div key={index} className={st.row}>
          <Skeleton className={st.poster} />
          <div className={st.main}>
            <div className={st.nothing} />
            <div className={st.label}>
              <Skeleton className={st.labelTextBig} />
              <Skeleton className={st.labelTextSmall} />
            </div>
            <div className={st.info}>
              <Skeleton className={st.infoText} />
              <Skeleton className={st.infoText} />
            </div>
          </div>
        </div>
        <div className={st.divider} />
      </>
    ))}
  </div>
)

export { ResultRowLoading }
