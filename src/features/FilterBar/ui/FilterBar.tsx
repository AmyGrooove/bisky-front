import { Collapse } from "@shared/ui/molecules"

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
      <Collapse label="Статус" isDefaultOpened>
        <CheckboxFilterGroup
          items={statusCheckboxFilterItems(filterState, updateFilters)}
        />
      </Collapse>
      <Collapse label="Тип">
        <CheckboxFilterGroup
          items={kindCheckboxFilterItems(filterState, updateFilters)}
        />
      </Collapse>
      <Collapse label="Возрастные ограничения">
        <CheckboxFilterGroup
          items={ratingCheckboxFilterItems(filterState, updateFilters)}
        />
      </Collapse>
    </div>
  )
}

export { FilterBar }
