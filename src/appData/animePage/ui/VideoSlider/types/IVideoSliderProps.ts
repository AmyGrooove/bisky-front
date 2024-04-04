import { HTMLAttributes } from "react"

interface IVideoSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: { name?: string | null; url?: string }[]
}

export type { IVideoSliderProps }
