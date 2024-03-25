import { cn } from "@shared/utils/functions"

import { IWatchStatusProps } from "../types/IWatchStatusProps"
import { SynchronizedStatusMap } from "../static/static"

import st from "./WatchStatus.module.scss"

const WatchStatus = (props: IWatchStatusProps) => {
  const { status } = props

  return (
    <div className={cn(st.status, st[status])}>
      {SynchronizedStatusMap[status]}
    </div>
  )
}

export { WatchStatus }
