import { Button, Collapse } from "@shared/ui/molecules"

import { kindCheckboxFilterItems } from "../static/kindCheckboxFilterItems"
import { ratingCheckboxFilterItems } from "../static/ratingCheckboxFilterItems"
import { statusCheckboxFilterItems } from "../static/statusCheckboxFilterItems"
import { IFilterBarProps } from "../types/IFilterBarProps"
import { studioSetFilterTagsItems } from "../static/studioSetFilterTagsItems"
import { genresSetFilterTagsItems } from "../static/genresSetFilterTagsItems"

import { CheckboxFilterGroup } from "./CheckboxFilterGroup/CheckboxFilterGroup"
import st from "./FilterBar.module.scss"
import { SetFilterTags } from "./SetFilterTags/SetFilterTags"
import { useFilterBar } from "./useFilterBar"

const FilterBar = (props: IFilterBarProps) => {
  const { updateFilters, filterState } = props

  const { studiosData, genresData, isLoading } = useFilterBar()

  return (
    <div className={st.root}>
      <div className={st.mainWrapper}>
        <Collapse label="Статус" isDefaultOpened>
          <CheckboxFilterGroup
            items={statusCheckboxFilterItems(filterState, updateFilters)}
          />
        </Collapse>
        <Collapse label="Тип" isDefaultOpened>
          <CheckboxFilterGroup
            items={kindCheckboxFilterItems(filterState, updateFilters)}
          />
        </Collapse>
        <Collapse label="Возрастные ограничения">
          <CheckboxFilterGroup
            items={ratingCheckboxFilterItems(filterState, updateFilters)}
          />
        </Collapse>
        <Collapse label="Жанры">
          <SetFilterTags
            isLoading={isLoading}
            name="Genres"
            items={genresSetFilterTagsItems(
              genresData,
              filterState,
              updateFilters,
            )}
          />
        </Collapse>
        <Collapse label="Студия">
          <SetFilterTags
            isLoading={isLoading}
            name="Studios"
            items={studioSetFilterTagsItems(
              studiosData,
              filterState,
              updateFilters,
            )}
          />
        </Collapse>
      </div>

      <Button
        onClick={() => updateFilters({ type: "reset", todo: {} })}
        className={st.resetButton}
      >
        Очистить фильтры
      </Button>
    </div>
  )
}

export { FilterBar }
