"use client"

import { InputHTMLAttributes, ReactNode } from "react"

import { cl } from "@/utils"
import { CheckIcon } from "@/components/icons"

import styles from "./index.module.scss"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  className?: string
}

const Checkbox = ({ label, className, ...props }: ICheckbox) => {
  return (
    <label className={cl(styles.checkbox, className)}>
      <input type="checkbox" className={styles.checkbox__input} {...props} />
      <div className={styles.checkbox__container}>
        <CheckIcon size={14} className={styles.checkbox__container__icon} />
      </div>
      {label}
    </label>
  )
}

export default Checkbox
