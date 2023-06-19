"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: "filled" | "subtle" | "outline"
  className?: string
}

const Button = ({
  variant = "filled",
  children = "",
  className,
  ...props
}: IButton) => {
  const variants = {
    filled: styles.button_filled,
    subtle: styles.button_subtle,
    outline: styles.button_outline,
  }

  return (
    <button
      {...props}
      className={cl(styles.button, variants[variant], className)}
    >
      {children}
    </button>
  )
}

export default Button
