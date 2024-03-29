import { LinkProps } from "next/link"

import { EWatchStatuses } from "@shared/types/enums/EWatchStatuses"
import { EStatus } from "@shared/types/enums/EStatus"

interface IAnimeCardProps extends LinkProps {
  anime: {
    poster: string | null
    label: string
    score: number
    status: keyof typeof EStatus
    inListCount: number
    airedSeriesCount: number
  }
  userData: {
    status: keyof typeof EWatchStatuses | null
    score: number | null

    onClick?: () => void
    userLogged?: boolean
  }

  className?: string
}

export type { IAnimeCardProps }
