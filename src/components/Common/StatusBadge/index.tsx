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
      ? styles.statusBagde_green
      : status === "anons"
      ? styles.statusBagde_orange
      : status === "ongoing"
      ? styles.statusBagde_blue
      : styles.statusBagde_red

  return (
    <span className={cl(styles.statusBagde, className, SELECT_STATUS)}>
      {children}
    </span>
  )
}

export default StatusBagde
