import { Session } from "next-auth"
import { HTMLAttributes } from "react"

interface IProfileMenuProps extends HTMLAttributes<HTMLDivElement> {
  user: Session
}

export type { IProfileMenuProps }
