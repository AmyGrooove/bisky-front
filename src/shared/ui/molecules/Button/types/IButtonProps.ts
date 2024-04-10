import { ButtonHTMLAttributes, ReactElement } from "react"

import { ITextProps } from "@shared/ui/atoms/Text/types/ITextProps"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  rightIcon?: ReactElement
  leftIcon?: ReactElement
  textProps?: Partial<ITextProps>
}

export type { IButtonProps }
