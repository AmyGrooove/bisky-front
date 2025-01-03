import { HTMLAttributes, ReactElement, RefObject } from "react"

import { IDropdownRef } from "./IDropdownRef"

interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
  callComponent: ReactElement
  children: ReactElement<HTMLElement>

  isDisabled?: boolean
  dropdownRef?: RefObject<IDropdownRef>
}

export type { IDropdownProps }
