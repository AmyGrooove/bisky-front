interface ITextProps {
  children: string

  size?:
    | "size-12"
    | "size-16"
    | "size-20"
    | "size-24"
    | "size-28"
    | "size-32"
    | "size-44"
  weight?: "weight-400" | "weight-700"
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export type { ITextProps }
