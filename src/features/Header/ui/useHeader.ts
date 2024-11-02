import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useContext } from "react"

import { ModalContext } from "@widgets/ModalProvider"

import { IHeaderProps } from "../types/IHeaderProps"

const useHeader = (props: IHeaderProps) => {
  const { className, ...otherProps } = props

  const pathname = usePathname()
  const { data: session, status } = useSession()

  const { setModal } = useContext(ModalContext)

  return { pathname, className, otherProps, setModal, session, status }
}

export { useHeader }
