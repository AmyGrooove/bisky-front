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
  return (
    <button
      {...props}
      className={cl(styles.button, styles[`button_${variant}`], className)}
    >
      {children}
    </button>
  )
}

export default Button
