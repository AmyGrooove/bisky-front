import { ButtonHTMLAttributes } from "react"

import { EWatchStatuses } from "@shared/types/enums/EWatchStatuses"

interface IWatchStatusProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: keyof typeof EWatchStatuses | "setWatch"
}

export type { IWatchStatusProps }
