import { cl } from "@/01-shared/utils"

import styles from "./Spinner.module.scss"

interface ISpinner {
  size?: number
  color?:
    | "white"
    | "lime"
    | "gray"
    | "red"
    | "blue"
    | "orange"
    | "green"
    | "bisky"
  className?: string
}

const Spinner = ({ size = 20, color = "bisky", className }: ISpinner) => {
  return (
    <div
      style={{ width: size + "px", height: size + "px" }}
      className={cl(styles.spinner, styles[`spinner_${color}`], className)}
    />
  )
}

export { Spinner }
