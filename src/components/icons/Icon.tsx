import { ReactNode } from "react"

export interface IconInterface {
  size?: number
  className?: string
}

interface IIcon extends IconInterface {
  children: ReactNode
}

const Icon = ({ children, size = 20, className }: IIcon) => {
  return (
    <span
      style={{ width: size + "px", height: size + "px", display: "flex" }}
      className={className}
    >
      {children}
    </span>
  )
}

export default Icon
