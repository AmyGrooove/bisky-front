import { InputHTMLAttributes } from "react"

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isDash?: boolean

  isOffDisableStyles?: boolean
}

export type { ICheckboxProps }
