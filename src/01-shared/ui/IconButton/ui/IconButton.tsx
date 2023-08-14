"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

import { cl } from "@/01-shared/utils"

import styles from "./IconButton.module.scss"

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
  return (
    <button
      {...props}
      className={cl(
        styles.iconButton,
        styles[`iconButton_${variant}`],
        className,
      )}
    >
      {icon}
    </button>
  )
}

export { IconButton }
