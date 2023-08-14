"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

import { cl } from "@/01-shared/utils"

import styles from "./Button.module.scss"

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
  return (
    <button
      {...props}
      className={cl(styles.button, styles[`button_${variant}`], className)}
    >
      {children}
    </button>
  )
}

export { Button }
