import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IBadge {
  children: string

  color?:
    | "lime"
    | "gray"
    | "red"
    | "blue"
    | "orange"
    | "green"
    | "white"
    | "bisky"
  calculate?: boolean
  className?: string
}

const Badge = ({ children, color, calculate, className }: IBadge) => {
  const score = Number(children)
  color =
    calculate && !isNaN(score)
      ? score >= 0 && score <= 4.9
        ? "red"
        : score >= 5 && score <= 6.9
        ? "gray"
        : "lime"
      : color

  return (
    <span className={cl(styles.badge, className, styles[`badge_${color}`])}>
      {children}
    </span>
  )
}

export default Badge
