import { ReactElement } from "react"

import { TListStatus } from "@entities/AnimeEstimate"

type TStatusButton = Exclude<TListStatus, "setWatch" | "cancel" | "skipped">

interface IStatusButton {
  icon: ReactElement<HTMLElement>
  status: TStatusButton
}

export type { IStatusButton, TStatusButton }
