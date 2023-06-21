"use client"

import { ButtonHTMLAttributes, ReactNode, memo } from "react"

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

export default IconButton
