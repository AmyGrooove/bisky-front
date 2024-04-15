import { IFilterBarProps } from "../types/IFilterBarProps"

import st from "./FilterBar.module.scss"

const FilterBar = (props: IFilterBarProps) => {
  const { dispatchFilter, filterState } = props

  return <div className={st.root}></div>
}

export { FilterBar }
