import { ReactNode } from "react"

import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IStatusBagde {
  status: "ongoing" | "anons" | "released" | "red"
  children: ReactNode

  className?: string
}

const StatusBagde = ({ status, children, className }: IStatusBagde) => {
  const SELECT_STATUS =
    status === "released"
      ? styles.statusBagde__green
      : status === "anons"
      ? styles.statusBagde__orange
      : status === "ongoing"
      ? styles.statusBagde__blue
      : styles.statusBagde__red

  return (
    <span className={cl(styles.statusBagde, className, SELECT_STATUS)}>
      {children}
    </span>
  )
}

export default StatusBagde
