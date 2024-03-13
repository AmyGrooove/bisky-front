import { InputHTMLAttributes } from "react"

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: () => void

  icon?: JSX.Element
  theme?: "dark" | "light"
}

export type { IInputFieldProps }
