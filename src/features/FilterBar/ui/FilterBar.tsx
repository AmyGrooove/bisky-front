import { Button, Collapse } from "@shared/ui/molecules"
import { Spinner } from "@shared/ui/atoms"
import { cn } from "@shared/utils/functions"

import { IFilterBarProps } from "../types/IFilterBarProps"
import { sortRadioboxItems } from "../static/sortRadioboxItems"

import { CheckboxFilterGroup } from "./CheckboxFilterGroup/CheckboxFilterGroup"
import st from "./FilterBar.module.scss"
import { SetFilterTags } from "./SetFilterTags/SetFilterTags"
import { useFilterBar } from "./useFilterBar"
import { DatesBetweenSelector } from "./DatesBetweenSelector/DatesBetweenSelector"
import { RadioSortGroup } from "./RadioSortGroup/RadioSortGroup"

const FilterBar = (props: IFilterBarProps) => {
  const {
    isLoading,
    updateFilters,
    filterState,
    fetchNewAnimesData,
    isAnimeFetching,
    statusItems,
    isStatusItemsIncludes,
    kindItems,
    isKindItemsIncludes,
    ratingItems,
    isRatingItemsIncludes,
    genresItems,
    isGenresItemsIncludes,
    studioItems,
    isStudioItemsIncludes,
    isFilterUsed,
  } = useFilterBar(props)

  return (
    <div className={cn(st.root, { [st.root_cleanButtonOn]: isFilterUsed })}>
      <div className={st.mainWrapper}>
        <Collapse label="Сортировка" isDefaultOpened>
          <RadioSortGroup
            items={sortRadioboxItems(updateFilters)}
            checkedItem={filterState.sort}
          />
        </Collapse>
        <Collapse
          label="Статус"
          isDefaultOpened
          isLabelHighlighted={isStatusItemsIncludes}
        >
          <CheckboxFilterGroup items={statusItems} />
        </Collapse>
        <Collapse label="Тип" isLabelHighlighted={isKindItemsIncludes}>
          <CheckboxFilterGroup items={kindItems} />
        </Collapse>
        <Collapse
          label="Возрастные ограничения"
          isLabelHighlighted={isRatingItemsIncludes}
        >
          <CheckboxFilterGroup items={ratingItems} />
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
        <Collapse label="Жанры" isLabelHighlighted={isGenresItemsIncludes}>
          <SetFilterTags
            isLoading={isLoading}
            name="Genres"
            items={genresItems}
          />
        </Collapse>
        <Collapse label="Студия" isLabelHighlighted={isStudioItemsIncludes}>
          <SetFilterTags
            isLoading={isLoading}
            name="Studios"
            items={studioItems}
          />
        </Collapse>
      </div>
      <div className={st.buttonsWrapper}>
        {isFilterUsed && (
          <Button
            disabled={isAnimeFetching}
            onClick={() => {
              updateFilters({ type: "reset", todo: {} })
              fetchNewAnimesData("default")
            }}
            leftIcon={isAnimeFetching ? <Spinner color="gray" /> : undefined}
            className={st.resetButton}
          >
            {isAnimeFetching ? "" : "Очистить фильтры"}
          </Button>
        )}
        <Button
          disabled={!isFilterUsed || isAnimeFetching}
          onClick={() => fetchNewAnimesData()}
          leftIcon={isAnimeFetching ? <Spinner color="gray" /> : undefined}
          className={cn(st.resetButton, st.resetButton_submit)}
        >
          {isAnimeFetching ? "" : "Применить фильтры"}
        </Button>
      </div>
    </div>
  )
}

export { FilterBar }
