import { InputHTMLAttributes } from "react"

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "dark" | "light"
  isSearchIconOn?: boolean
  label?: string
}

export type { IInputFieldProps }
