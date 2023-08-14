"use client"

import { InputHTMLAttributes, ReactNode } from "react"

import { cl } from "@/01-shared/utils"

import { CheckIcon } from "../../icons"

import styles from "./Checkbox.module.scss"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  className?: string
}

const Checkbox = ({ label, className, ...props }: ICheckbox) => {
  return (
    <label className={cl(styles.checkbox, className)}>
      <input type="checkbox" className={styles.checkbox__input} {...props} />
      <div className={styles.checkbox__container}>
        <CheckIcon size={12} className={styles.checkbox__container__icon} />
      </div>
      <div className={styles.checkbox__label}>{label}</div>
    </label>
  )
}

export { Checkbox }
