import { cn } from "@shared/utils/functions"

import { getCircleGradient } from "../functions/getCircleGradient"
import { ICircleViewsProps } from "../types/ICircleViewsProps"

import st from "./CircleViews.module.scss"

const CircleViews = (props: ICircleViewsProps) => {
  const { className, ...otherProps } = props

  return (
    <div
      {...otherProps}
      className={cn(st.root, className)}
      style={{ background: getCircleGradient(otherProps) }}
    />
  )
}

export { CircleViews }
