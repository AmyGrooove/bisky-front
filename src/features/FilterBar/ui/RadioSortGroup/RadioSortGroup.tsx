import { cn } from "@shared/utils/functions"
import { Radiobox } from "@shared/ui/atoms"

import { IRadioSortGroupProps } from "../../types/IRadioSortGroupProps"

import st from "./RadioSortGroup.module.scss"

const RadioSortGroup = (props: IRadioSortGroupProps) => {
  const { className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <Radiobox />
      <Radiobox />
    </div>
  )
}

export { RadioSortGroup }
