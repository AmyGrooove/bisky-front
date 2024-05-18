import { HTMLAttributes } from "react"

interface IPlayerModuleProps extends HTMLAttributes<HTMLIFrameElement> {
  animeShikiId: number

  isDefaultStyles?: boolean
}

export type { IPlayerModuleProps }
