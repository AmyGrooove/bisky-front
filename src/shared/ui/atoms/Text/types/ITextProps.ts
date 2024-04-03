interface ITextProps {
  children: string | number | Date

  size?: "12" | "16" | "20" | "24" | "28" | "32" | "44"
  weight?: "400" | "700"
  as?: keyof JSX.IntrinsicElements
  className?: string
  isDefaultColor?: boolean
}

export type { ITextProps }
