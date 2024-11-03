import {
  CheckIcon,
  CrossIcon,
  PlayIcon,
  StarIcon,
  TrashIcon,
} from "@shared/icons"
import { cn } from "@shared/utils/functions"

import { IStatusIconProps } from "../../types/IStatusIconProps"

import st from "./StatusIcon.module.scss"
import { useStatusIcon } from "./useStatusIcon"

const StatusIcon = (props: IStatusIconProps) => {
  const { selectedStatus } = useStatusIcon(props)

  return {
    none: <></>,
    skipped: (
      <div className={cn(st.root, st.root_skipped)}>
        <CrossIcon className={cn(st.icon, st.icon_skipped)} />
      </div>
    ),
    added: (
      <div className={cn(st.root, st.root_added)}>
        <StarIcon variant="filled" className={cn(st.icon, st.icon_added)} />
      </div>
    ),
    dropped: (
      <div className={cn(st.root, st.root_dropped)}>
        <TrashIcon className={cn(st.icon, st.icon_dropped)} />
      </div>
    ),
    watching: (
      <div className={cn(st.root, st.root_watching)}>
        <PlayIcon className={cn(st.icon, st.icon_watching)} />
      </div>
    ),
    completed: (
      <div className={cn(st.root, st.root_completed)}>
        <CheckIcon className={cn(st.icon, st.icon_completed)} />
      </div>
    ),
  }[selectedStatus]
}

export { StatusIcon }
