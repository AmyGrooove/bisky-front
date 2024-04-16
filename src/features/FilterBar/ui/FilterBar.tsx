import { kindCheckboxFilterItems } from "../static/kindCheckboxFilterItems"
import { ratingCheckboxFilterItems } from "../static/ratingCheckboxFilterItems"
import { statusCheckboxFilterItems } from "../static/statusCheckboxFilterItems"
import { IFilterBarProps } from "../types/IFilterBarProps"

import { CheckboxFilterGroup } from "./CheckboxFilterGroup/CheckboxFilterGroup"
import st from "./FilterBar.module.scss"

const FilterBar = (props: IFilterBarProps) => {
  const { updateFilters, filterState } = props

  return (
    <div className={st.root}>
      <CheckboxFilterGroup
        label="Статус"
        items={statusCheckboxFilterItems(filterState, updateFilters)}
      />
      <CheckboxFilterGroup
        label="Тип"
        items={kindCheckboxFilterItems(filterState, updateFilters)}
      />
      <CheckboxFilterGroup
        label="Возрастные ограничения"
        items={ratingCheckboxFilterItems(filterState, updateFilters)}
      />
    </div>
  )
}

export { FilterBar }
