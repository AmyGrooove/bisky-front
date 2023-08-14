import { cl } from "@/01-shared/utils"

import styles from "./Divider.module.scss"

interface IDivider {
  color?: "gray" | "bisky"
  label?: string
  className?: string
}

const Divider = ({ color = "gray", label, className }: IDivider) => {
  return (
    <div
      className={cl(
        styles.divider,
        !label && styles[`divider_${color}`],
        className,
      )}
    >
      {label ? <div className={styles.divider__label}>{label}</div> : null}
    </div>
  )
}

export { Divider }
