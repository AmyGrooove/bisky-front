import { Button, Collapse } from "@shared/ui/molecules"
import { Spinner } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"

import { kindCheckboxFilterItems } from "../static/kindCheckboxFilterItems"
import { ratingCheckboxFilterItems } from "../static/ratingCheckboxFilterItems"
import { statusCheckboxFilterItems } from "../static/statusCheckboxFilterItems"
import { IFilterBarProps } from "../types/IFilterBarProps"
import { studioSetFilterTagsItems } from "../static/studioSetFilterTagsItems"
import { genresSetFilterTagsItems } from "../static/genresSetFilterTagsItems"
import { sortRadioboxItems } from "../static/sortRadioboxItems"

import { CheckboxFilterGroup } from "./CheckboxFilterGroup/CheckboxFilterGroup"
import st from "./FilterBar.module.scss"
import { SetFilterTags } from "./SetFilterTags/SetFilterTags"
import { useFilterBar } from "./useFilterBar"
import { DatesBetweenSelector } from "./DatesBetweenSelector/DatesBetweenSelector"
import { RadioSortGroup } from "./RadioSortGroup/RadioSortGroup"

const FilterBar = (props: IFilterBarProps) => {
  const {
    updateFilters,
    filterState,
    fetchNewAnimesData,
    isAnimeFetching = false,
  } = props

  const { studiosData, genresData, isLoading } = useFilterBar()

  return (
    <div
      className={cn(st.root, {
        [st.root_cleanButtonOn]: !filterState.isFilterNotUsed,
      })}
    >
      <div className={st.mainWrapper}>
        <Collapse label="Сортировка" isDefaultOpened>
          <RadioSortGroup
            items={sortRadioboxItems(updateFilters)}
            checkedItem={filterState.sort}
          />
        </Collapse>
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
        <Collapse label="Года выхода">
          <DatesBetweenSelector
            changeDates={(from, to) =>
              updateFilters({
                type: "changeDate",
                todo: { dates_airedOn: { from, to } },
              })
            }
            from={filterState.dates_airedOn.from}
            to={filterState.dates_airedOn.to}
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

      <div className={st.buttonsWrapper}>
        {!filterState.isFilterNotUsed && (
          <Button
            disabled={isAnimeFetching}
            onClick={() => {
              updateFilters({ type: "reset", todo: {} })
              fetchNewAnimesData(true)
            }}
            leftIcon={isAnimeFetching ? <Spinner color="gray" /> : <></>}
            className={st.resetButton}
          >
            {isAnimeFetching ? "" : "Очистить фильтры"}
          </Button>
        )}
        <Button
          disabled={filterState.isFilterNotUsed || isAnimeFetching}
          onClick={() => fetchNewAnimesData()}
          leftIcon={isAnimeFetching ? <Spinner /> : <></>}
          className={cn(st.resetButton, st.resetButton_submit)}
        >
          {isAnimeFetching ? "" : "Применить фильтры"}
        </Button>
      </div>
    </div>
  )
}

export { FilterBar }
