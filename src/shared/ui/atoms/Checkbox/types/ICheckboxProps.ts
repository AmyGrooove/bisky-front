import { InputHTMLAttributes } from "react"

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string
  kind?: "check_mark" | "point"
}

export type { ICheckboxProps }
