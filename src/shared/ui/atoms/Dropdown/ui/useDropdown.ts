import { useState, useRef, useImperativeHandle, ForwardedRef } from "react"

import { useClickOutside } from "@shared/utils/hooks"

import { IDropdownProps } from "../types/IDropdownProps"
import { IDropdownRef } from "../types/IDropdownRef"

const useDropdown = (
  props: IDropdownProps,
  ref: ForwardedRef<IDropdownRef>,
) => {
  const {
    callComponent,
    children,
    className,
    isDisabled = false,
    ...otherProps
  } = props

  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [isDropdownClosing, setIsDropdownClosing] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => {
    setIsDropdownClosing(true)

    setTimeout(() => {
      setIsDropdownOpened(false)
      setIsDropdownClosing(false)
    }, 100)
  }

  useImperativeHandle(ref, () => ({ closeMenu }), [])

  useClickOutside([rootRef], closeMenu)

  return {
    rootRef,
    otherProps,
    className,
    isDisabled,
    isDropdownOpened,
    closeMenu,
    setIsDropdownOpened,
    callComponent,
    children,
    isDropdownClosing,
  }
}

export { useDropdown }
