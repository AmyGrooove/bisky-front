import { InputHTMLAttributes } from "react"

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isDash?: boolean
}

export type { ICheckboxProps }
