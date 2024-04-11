import { HTMLAttributes } from "react"

interface ITextProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: string | number | Date
  size?: "12" | "16" | "20" | "24" | "28" | "32" | "44"
  weight?: "400" | "700"
  as?: keyof JSX.IntrinsicElements
  isDefaultColor?: boolean
}

export type { ITextProps }
