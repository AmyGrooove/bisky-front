import { ReactNode } from "react"

import { cl } from "@/utils"
import styles from "./index.module.scss"

interface IBagde {
  className?: string
  color: "blue" | "orange" | "green" | "red" | "gray" | "lime"
  children: ReactNode
}

const Bagde = ({ className, color, children }: IBagde) => {
  return (
    <div className={cl(className)}>
      {color === "blue" && (
        <span className={cl(styles.bagde, styles.bagde__blue)}>{children}</span>
      )}
      {color === "orange" && (
        <span className={cl(styles.bagde, styles.bagde__orange)}>
          {children}
        </span>
      )}
      {color === "green" && (
        <span className={cl(styles.bagde, styles.bagde__green)}>
          {children}
        </span>
      )}
      {color === "red" && (
        <span className={cl(styles.bagde, styles.bagde__red)}>{children}</span>
      )}
      {color === "gray" && (
        <span className={cl(styles.bagde, styles.bagde__gray)}>{children}</span>
      )}
      {color === "lime" && (
        <span className={cl(styles.bagde, styles.bagde__lime)}>{children}</span>
      )}
    </div>
  )
}

export default Bagde
