import { HTMLAttributes } from "react"

interface IScreenshotSliderProps extends HTMLAttributes<HTMLDivElement> {
  items: string[]

  screenshotsSize?: { width?: number; height?: number }
}

export type { IScreenshotSliderProps }
