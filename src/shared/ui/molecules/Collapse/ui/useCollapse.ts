import { useState } from "react"

import { ICollapseProps } from "../types/ICollapseProps"

const useCollapse = (props: ICollapseProps) => {
  const {
    children,
    label,
    isDefaultOpened = false,
    className,
    isLabelHighlighted = false,
    ...otherProps
  } = props

  const [isCollapseOpened, setIsCollapseOpened] = useState(isDefaultOpened)

  return {
    children,
    label,
    className,
    otherProps,
    setIsCollapseOpened,
    isCollapseOpened,
    isLabelHighlighted,
  }
}

export { useCollapse }
