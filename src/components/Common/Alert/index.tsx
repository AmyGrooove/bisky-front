import { cl } from "@/utils"
import { CROSS } from "@/constants"

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
  className = "",
}: IAlert) => {
  const colors = {
    red: styles.alert_red,
    green: styles.alert_green,
    blue: styles.alert_blue,
    orange: styles.alert_orange,
  }

  return (
    <div className={cl(styles.alert, colors[color], className)}>
      <div className={styles.alert__header}>
        <span className={styles.alert__header__title}>{title}</span>
        <IconButton iconName={CROSS} onClick={onClose} />
      </div>
      <p className={styles.alert__message}>{children}</p>
    </div>
  )
}

export default Alert
