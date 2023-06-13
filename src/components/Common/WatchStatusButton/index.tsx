import { MouseEventHandler } from "react"

import { cl } from "@/utils"
import { CHECK, PLAY, STAR_FULL, STAR_OUTLINE, TRASH } from "@/constants"

import AppImage from "../AppImage"
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
    status === "setWatch"
      ? STAR_OUTLINE
      : status === "added"
      ? STAR_FULL
      : status === "complete"
      ? CHECK
      : status === "watching"
      ? PLAY
      : TRASH

  return (
    <Button className={cl(styles.watchStatusButton, SELECT_STATUS, className)}>
      <AppImage src={SELECT_STATUS_TEXT} width={20} height={20} />
    </Button>
  )
}

export default WatchStatusButton
