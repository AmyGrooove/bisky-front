import { ReactNode } from "react"

import { cl } from "@/01-shared/utils"

import styles from "./AspectRatio.module.scss"

interface IAspectRatio {
  ratio: number

  children?: ReactNode
  className?: string
}

const AspectRatio = ({ children, ratio, className }: IAspectRatio) => {
  return (
    <div
      className={cl(styles.aspectRatio, className)}
      style={{
        paddingBottom: `${(1 / ratio) * 100}%`,
      }}
    >
      {children}
    </div>
  )
}

export { AspectRatio }
