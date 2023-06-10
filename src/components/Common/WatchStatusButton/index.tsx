import { ReactNode } from "react"

import { cl } from "@/utils"
import styles from "./index.module.scss"
import AmyImage from "../AmyImage"
import { STAR_FULL } from "@/constants"

interface IWatchStatusButton {
  className?: string
  status: "setWatch" | "complete" | "added" | "watching" | "dropped"
}

const WatchStatusButton = ({ className, status }: IWatchStatusButton) => {
  return (
    <div className={cl(className)}>
      {status === "setWatch" && (
        <span className={cl(styles.watchStatus, styles.watchStatus__setWatch)}>
          <AmyImage src={STAR_FULL} width={20} height={20} />
        </span>
      )}
      {status === "complete" && (
        <span className={cl(styles.watchStatus, styles.watchStatus__complete)}>
          <AmyImage src={STAR_FULL} width={20} height={20} />
        </span>
      )}
      {status === "added" && (
        <span className={cl(styles.watchStatus, styles.watchStatus__added)}>
          <AmyImage src={STAR_FULL} width={20} height={20} />
        </span>
      )}
      {status === "watching" && (
        <span className={cl(styles.watchStatus, styles.watchStatus__watching)}>
          <AmyImage src={STAR_FULL} width={20} height={20} />
        </span>
      )}
      {status === "dropped" && (
        <span className={cl(styles.watchStatus, styles.watchStatus__dropped)}>
          <AmyImage src={STAR_FULL} width={20} height={20} />
        </span>
      )}
    </div>
  )
}

export default WatchStatusButton
