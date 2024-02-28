interface ITextProps {
  children: string

  size?: "12" | "16" | "20" | "24" | "28" | "32" | "44"
  weight?: "400" | "700"
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export type { ITextProps }
