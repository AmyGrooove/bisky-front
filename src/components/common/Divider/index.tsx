import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IDivider {
  color?: "gray" | "bisky"
  className?: string
}

const Divider = ({ color = "gray", className }: IDivider) => {
  return (
    <div
      className={cl(styles.divider, styles[`divider_${color}`], className)}
    />
  )
}

export default Divider
