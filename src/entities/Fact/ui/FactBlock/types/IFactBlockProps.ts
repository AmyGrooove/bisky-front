import { IFactModel } from "@entities/Fact"
import { HTMLAttributes } from "react"

interface IFactBlockProps extends HTMLAttributes<HTMLDivElement> {
  fact: IFactModel
}

export type { IFactBlockProps }
