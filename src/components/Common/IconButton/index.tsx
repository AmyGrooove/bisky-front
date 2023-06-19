"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode

  variant?: "filled" | "subtle"
  className?: string
}

const IconButton = ({
  icon,
  variant = "subtle",
  className,
  ...props
}: IIconButton) => {
  const variants = {
    filled: styles.iconButton_filled,
    subtle: styles.iconButton_subtle,
  }

  return (
    <button
      {...props}
      className={cl(styles.iconButton, variants[variant], className)}
    >
      {icon}
    </button>
  )
}

export default IconButton
