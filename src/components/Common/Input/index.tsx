"use client"

import { InputHTMLAttributes, ReactNode, memo } from "react"

import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "light" | "dark"
  right?: ReactNode
  className?: string
}

const Input = memo(
  ({ variant = "light", right, className, ...props }: IInput) => {
    const variants = {
      light: styles.inputGroup__input_light,
      dark: styles.inputGroup__input_dark,
    }

    return (
      <div className={cl(styles.inputGroup, className)}>
        <input
          {...props}
          className={cl(styles.inputGroup__input, variants[variant])}
        />
        {right && <div className={styles.inputGroup__right}>{right}</div>}
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input
