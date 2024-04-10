import { HTMLAttributes } from "react"

import { IFactModel } from "@entities/Fact"

interface IFactBlockProps extends HTMLAttributes<HTMLDivElement> {
  fact: IFactModel
}

export type { IFactBlockProps }
