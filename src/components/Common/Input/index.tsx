"use client"

import { InputHTMLAttributes, ReactNode } from "react"

import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "light" | "dark"
  className?: string
}

const Input = ({ variant = "light", className, ...props }: IInput) => {
  const variants = {
    light: styles.input_light,
    dark: styles.input_dark,
  }

  return (
    <input
      {...props}
      className={cl(styles.input, variants[variant], className)}
    />
  )
}

export default Input
