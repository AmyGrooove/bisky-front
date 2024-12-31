import { HTMLAttributes } from "react"

import { TStatus } from "@entities/Anime"

interface IUserDataProps extends HTMLAttributes<HTMLDivElement> {
  _id?: string
  animeStatus?: TStatus
}

export type { IUserDataProps }
