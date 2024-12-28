import { useSession } from "next-auth/react"
import { useRef } from "react"

import { IDropdownRef } from "@shared/ui/atoms"

import { IProfileMenuProps } from "../types/IProfileMenuProps"

const useProfileMenu = (props: IProfileMenuProps) => {
  const { user, className, ...otherProps } = props

  const { data: session } = useSession()

  const dropdownRef = useRef<IDropdownRef>(null)

  return { dropdownRef, otherProps, user, className, session }
}

export { useProfileMenu }
