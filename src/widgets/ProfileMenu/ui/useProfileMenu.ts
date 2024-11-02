import { useSession } from "next-auth/react"
import { useContext, useRef } from "react"

import { IDropdownRef } from "@shared/ui/atoms"
import { ModalContext } from "@widgets/ModalProvider"

import { IProfileMenuProps } from "../types/IProfileMenuProps"

const useProfileMenu = (props: IProfileMenuProps) => {
  const { user, className, ...otherProps } = props

  const { data: session } = useSession()

  const { setModal } = useContext(ModalContext)

  const dropdownRef = useRef<IDropdownRef>(null)

  return { dropdownRef, otherProps, user, className, session, setModal }
}

export { useProfileMenu }
