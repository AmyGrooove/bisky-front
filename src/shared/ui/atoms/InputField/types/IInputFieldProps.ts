import { InputHTMLAttributes } from "react"

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "dark" | "light"
  isSearchIconOn?: boolean
}

export type { IInputFieldProps }
