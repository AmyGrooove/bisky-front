import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IAlert {
  title: string

  color?: "red" | "green" | "blue" | "orange"
  children?: string
  className?: string
}

const Alert = ({
  title,
  color = "blue",
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
      <span className={styles.alert__title}>{title}</span>
      <p className={styles.alert__message}>{children}</p>
    </div>
  )
}

export default Alert
