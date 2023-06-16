"use client"

import { ButtonHTMLAttributes } from "react"

import { cl } from "@/utils"

import AppImage from "../AppImage"

import styles from "./index.module.scss"

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string

  className?: string
}

const IconButton = ({ iconName, className = "", ...props }: IIconButton) => {
  return (
    <button {...props} className={cl(styles.iconButton, className)}>
      <AppImage imageType="vector" src={iconName} width={20} height={20} />
    </button>
  )
}

export default IconButton
