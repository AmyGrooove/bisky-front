import { MouseEventHandler } from "react"

import { cl } from "@/utils"
import {
  CheckIcon,
  PlayIcon,
  StarFullIcon,
  StarOutlineIcon,
  TrashIcon,
} from "@/Icons"

import Button from "../Button"

import styles from "./index.module.scss"

interface IWatchStatusButton {
  onClick: MouseEventHandler<HTMLButtonElement>

  status?: "setWatch" | "added" | "complete" | "watching" | "dropped"
  className?: string
}

const WatchStatusButton = ({
  status = "setWatch",
  className,
}: IWatchStatusButton) => {
  const SELECT_STATUS =
    status === "complete"
      ? styles.watchStatusButton_complete
      : status === "watching"
      ? styles.watchStatusButton_watching
      : status === "dropped"
      ? styles.watchStatusButton_dropped
      : styles.watchStatusButton_setWatch

  const SELECT_STATUS_TEXT =
    status === "setWatch" ? (
      <StarOutlineIcon size={20} />
    ) : status === "added" ? (
      <StarFullIcon size={20} />
    ) : status === "complete" ? (
      <CheckIcon size={20} />
    ) : status === "watching" ? (
      <PlayIcon size={20} />
    ) : (
      <TrashIcon size={20} />
    )

  return (
    <Button className={cl(styles.watchStatusButton, SELECT_STATUS, className)}>
      {SELECT_STATUS_TEXT}
    </Button>
  )
}

export default WatchStatusButton
