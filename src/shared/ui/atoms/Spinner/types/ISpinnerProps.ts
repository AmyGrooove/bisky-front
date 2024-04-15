import { HTMLAttributes } from "react"

interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
  color?:
    | "white"
    | "lime"
    | "gray"
    | "red"
    | "blue"
    | "orange"
    | "green"
    | "bisky"
}

export type { ISpinnerProps }
