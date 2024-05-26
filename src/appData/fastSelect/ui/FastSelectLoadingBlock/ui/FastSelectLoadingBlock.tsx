import { Skeleton } from "@shared/ui/atoms"

import st from "./FastSelectLoadingBlock.module.scss"

const FastSelectLoadingBlock = () => (
  <div className={st.root}>
    <Skeleton className={st.main} />
  </div>
)

export { FastSelectLoadingBlock }
