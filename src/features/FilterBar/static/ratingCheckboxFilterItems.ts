import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"

const ratingCheckboxFilterItems = (
  filterState: ICatalogAnimesVariables,
  updateFilters: (value: IFilterState) => void,
) => [
  {
    label: "0+",
    isExclude: filterState.filterExclude.rating.includes("g"),
    isChecked: filterState.filterInclude.rating.includes("g"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { rating: ["g"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { rating: ["g"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { rating: ["g"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { rating: ["g"] } },
      }),
  },
  {
    label: "6+",
    isExclude: filterState.filterExclude.rating.includes("pg"),
    isChecked: filterState.filterInclude.rating.includes("pg"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { rating: ["pg"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { rating: ["pg"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { rating: ["pg"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { rating: ["pg"] } },
      }),
  },
  {
    label: "13+",
    isExclude: filterState.filterExclude.rating.includes("pg_13"),
    isChecked: filterState.filterInclude.rating.includes("pg_13"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { rating: ["pg_13"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { rating: ["pg_13"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { rating: ["pg_13"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { rating: ["pg_13"] } },
      }),
  },
  {
    label: "16+",
    isExclude: filterState.filterExclude.rating.includes("r"),
    isChecked: filterState.filterInclude.rating.includes("r"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { rating: ["r"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { rating: ["r"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { rating: ["r"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { rating: ["r"] } },
      }),
  },
  {
    label: "18+",
    isExclude:
      filterState.filterExclude.rating.includes("r_plus") ||
      filterState.filterExclude.rating.includes("rx"),
    isChecked:
      filterState.filterInclude.rating.includes("r_plus") ||
      filterState.filterInclude.rating.includes("rx"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { rating: ["r_plus", "rx"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { rating: ["r_plus", "rx"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { rating: ["r_plus", "rx"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { rating: ["r_plus", "rx"] } },
      }),
  },
]

export { ratingCheckboxFilterItems }
