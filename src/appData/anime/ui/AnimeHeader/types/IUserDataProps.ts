import { HTMLAttributes } from "react"

import { EStatus } from "@entities/Anime"

interface IUserDataProps extends HTMLAttributes<HTMLDivElement> {
  _id?: string
  animeStatus?: keyof typeof EStatus
}

export type { IUserDataProps }
