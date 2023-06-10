import { ReactNode } from "react"

import { cl } from "@/utils"
import styles from "./index.module.scss"

interface IStatusBagde {
  className?: string
  status: "ongoing" | "anons" | "released" | "new_episode"
  children?: ReactNode
}

const StatusBagde = ({ className, status, children }: IStatusBagde) => {
  return (
    <div className={cl(className)}>
      {status === "ongoing" && (
        <span className={cl(styles.status, styles.status__blue)}>
          {children ? children : "ongoing"}
        </span>
      )}
      {status === "anons" && (
        <span className={cl(styles.status, styles.status__orange)}>
          {children ? children : "anons"}
        </span>
      )}
      {status === "released" && (
        <span className={cl(styles.status, styles.status__green)}>
          {children ? children : "released"}
        </span>
      )}
      {status === "new_episode" && (
        <span className={cl(styles.status, styles.status__red)}>
          {children ? children : "new_episode"}
        </span>
      )}
    </div>
  )
}

export default StatusBagde
