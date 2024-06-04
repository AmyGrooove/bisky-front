import { HTMLAttributes } from "react"

import { ITextProps } from "@shared/ui/atoms/Text/types/ITextProps"

interface IOversizeTextProps
  extends ITextProps,
    Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: string
}

export type { IOversizeTextProps }
