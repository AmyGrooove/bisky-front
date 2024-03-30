import { cloneElement } from "react"

import { cn } from "@shared/utils/functions"

import { IWatchStatusProps } from "../types/IWatchStatusProps"
import { getIconFromWatchStatus } from "../functions/getIconFromWatchStatus"

import st from "./WatchStatus.module.scss"

const WatchStatus = (props: IWatchStatusProps) => {
  const { status, className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={cn(st.root, className, st[`root_${status}`])}
    >
      {cloneElement(getIconFromWatchStatus(status), { className: st.icon })}
    </button>
  )
}

export { WatchStatus }
