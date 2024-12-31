import { ButtonHTMLAttributes } from "react"

import { TListStatus } from "@entities/AnimeEstimate"

interface IWatchStatusProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: TListStatus
}

export type { IWatchStatusProps }
