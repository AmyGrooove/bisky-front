"use client"

import { ButtonHTMLAttributes } from "react"

import { cl } from "@/utils"

import AppImage from "../AppImage"

import styles from "./index.module.scss"

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string

  variant?: "filled" | "subtle"
  size?: number
  className?: string
}

const IconButton = ({
  iconName,
  size = 20,
  variant = "subtle",
  className = "",
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
      <AppImage imageType="vector" src={iconName} width={size} height={size} />
    </button>
  )
}

export default IconButton
