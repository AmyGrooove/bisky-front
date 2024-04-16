import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"

const statusCheckboxFilterItems = (
  filterState: ICatalogAnimesVariables,
  updateFilters: (value: IFilterState) => void,
) => [
  {
    label: "Анонсировано",
    isExclude: filterState.filterExclude.status.includes("anons"),
    isChecked: filterState.filterInclude.status.includes("anons"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { status: ["anons"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { status: ["anons"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { status: ["anons"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { status: ["anons"] } },
      }),
  },
  {
    label: "Сейчас выходит",
    isExclude: filterState.filterExclude.status.includes("ongoing"),
    isChecked: filterState.filterInclude.status.includes("ongoing"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { status: ["ongoing"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { status: ["ongoing"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { status: ["ongoing"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { status: ["ongoing"] } },
      }),
  },
  {
    label: "Вышедшее",
    isExclude: filterState.filterExclude.status.includes("released"),
    isChecked: filterState.filterInclude.status.includes("released"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { status: ["released"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { status: ["released"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { status: ["released"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { status: ["released"] } },
      }),
  },
]

export { statusCheckboxFilterItems }
