"use client"

import { InputHTMLAttributes, ReactNode, useEffect, useState } from "react"

import { CheckIcon } from "@/Icons"
import { cl } from "@/utils"

import styles from "./index.module.scss"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  className?: string
}

const Checkbox = ({ label, className, ...props }: ICheckbox) => {
  const [randomId, setRandomId] = useState("")

  useEffect(() => {
    setRandomId((prev) => Math.random().toString(36).substring(2, 7))
  }, [])

  return (
    <div className={cl(styles.checkboxGroup, className)}>
      <div className={cl(styles.checkboxGroup__checkbox, className)}>
        <input
          id={`checkbox_${randomId}`}
          type="checkbox"
          {...props}
          className={styles.checkboxGroup__input}
        />
        <CheckIcon size={14} className={styles.checkboxGroup__icon} />
      </div>
      {label && (
        <label
          htmlFor={`checkbox_${randomId}`}
          className={styles.checkboxGroup__label}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox
