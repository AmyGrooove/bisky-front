import { cl } from "@/utils"

import styles from "./index.module.scss"

interface ISpinner {
  size?: number
  color?: "lime" | "gray" | "red" | "blue" | "orange" | "green" | "bisky"
  className?: string
}

const Spinner = ({ size = 20, color = "bisky", className }: ISpinner) => {
  const colors = {
    lime: styles.spinner_lime,
    gray: styles.spinner_gray,
    red: styles.spinner_red,
    blue: styles.spinner_blue,
    orange: styles.spinner_orange,
    green: styles.spinner_green,
    bisky: styles.spinner_bisky,
  }

  return (
    <div
      style={{ width: size + "px", height: size + "px" }}
      className={cl(styles.spinner, colors[color], className)}
    />
  )
}

export default Spinner
