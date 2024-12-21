import { ButtonHTMLAttributes, ReactNode } from "react"

import { ITextProps } from "@shared/ui/atoms/Text/types/ITextProps"
import { IIconProps } from "@shared/icons"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  renderRightIcon?: (props: IIconProps) => ReactNode
  renderLeftIcon?: (props: IIconProps) => ReactNode
  textProps?: Partial<ITextProps>
}

export type { IButtonProps }
