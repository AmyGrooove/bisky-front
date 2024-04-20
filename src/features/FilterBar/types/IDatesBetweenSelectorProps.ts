import { HTMLAttributes } from "react"

interface IDatesBetweenSelectorProps extends HTMLAttributes<HTMLDivElement> {
  from: number | null
  to: number | null
  changeDates: (from: number | null, to: number | null) => void
}

export type { IDatesBetweenSelectorProps }
