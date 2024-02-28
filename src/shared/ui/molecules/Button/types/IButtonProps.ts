import { ButtonHTMLAttributes, ReactElement } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  iconRight?: ReactElement
  iconLeft?: ReactElement
}

export type { IButtonProps }
