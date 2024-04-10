interface ITextProps {
  children: string | null

  size?: "12" | "16" | "20" | "24" | "28" | "32" | "44"
  weight?: "400" | "700"
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export type { ITextProps }
