import { cl } from "@/utils"
import { CrossIcon } from "@/Icons"

import IconButton from "../IconButton"

import styles from "./index.module.scss"

interface IAlert {
  title: string

  color?: "red" | "green" | "blue" | "orange"
  onClose?: () => void
  children?: string
  className?: string
}

const Alert = ({
  title,
  color = "blue",
  onClose,
  children = "",
  className,
}: IAlert) => {
  return (
    <div className={cl(styles.alert, styles[`alert_${color}`], className)}>
      <div className={styles.alert__header}>
        <span className={styles.alert__header__title}>{title}</span>
        <IconButton icon={<CrossIcon size={12} />} onClick={onClose} />
      </div>
      <p className={styles.alert__message}>{children}</p>
    </div>
  )
}

export default Alert
