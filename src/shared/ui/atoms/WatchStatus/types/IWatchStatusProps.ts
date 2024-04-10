import { ButtonHTMLAttributes } from "react"

import { EListStatus } from "@entities/AnimeEstimate"

interface IWatchStatusProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: keyof typeof EListStatus
}

export type { IWatchStatusProps }
