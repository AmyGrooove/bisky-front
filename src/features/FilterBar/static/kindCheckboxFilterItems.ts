import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"

const kindCheckboxFilterItems = (
  filterState: ICatalogAnimesVariables,
  updateFilters: (value: IFilterState) => void,
) => [
  {
    label: "Сериал",
    isExclude: filterState.filterExclude.kind.includes("tv"),
    isChecked: filterState.filterInclude.kind.includes("tv"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["tv"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["tv"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["tv"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["tv"] } },
      }),
  },
  {
    label: "Фильм",
    isExclude: filterState.filterExclude.kind.includes("movie"),
    isChecked: filterState.filterInclude.kind.includes("movie"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["movie"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["movie"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["movie"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["movie"] } },
      }),
  },
  {
    label: "OVA",
    isExclude: filterState.filterExclude.kind.includes("ova"),
    isChecked: filterState.filterInclude.kind.includes("ova"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["ova"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["ova"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["ova"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["ova"] } },
      }),
  },
  {
    label: "ONA",
    isExclude: filterState.filterExclude.kind.includes("ona"),
    isChecked: filterState.filterInclude.kind.includes("ona"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["ona"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["ona"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["ona"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["ona"] } },
      }),
  },
  {
    label: "Спец-выпуск",
    isExclude:
      filterState.filterExclude.kind.includes("special") ||
      filterState.filterExclude.kind.includes("tv_special"),
    isChecked:
      filterState.filterInclude.kind.includes("special") ||
      filterState.filterInclude.kind.includes("tv_special"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["special", "tv_special"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["special", "tv_special"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["special", "tv_special"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["special", "tv_special"] } },
      }),
  },
  {
    label: "Прочее",
    isExclude:
      filterState.filterExclude.kind.includes("music") ||
      filterState.filterExclude.kind.includes("none") ||
      filterState.filterExclude.kind.includes("pv") ||
      filterState.filterExclude.kind.includes("cm"),
    isChecked:
      filterState.filterInclude.kind.includes("music") ||
      filterState.filterInclude.kind.includes("none") ||
      filterState.filterInclude.kind.includes("pv") ||
      filterState.filterInclude.kind.includes("cm"),
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { kind: ["music", "none", "pv", "cm"] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { kind: ["music", "none", "pv", "cm"] } },
      }),
    excludeItem: () =>
      updateFilters({
        type: "excludeFilter",
        todo: { filter: { kind: ["music", "none", "pv", "cm"] } },
      }),
    deleteExcludeItem: () =>
      updateFilters({
        type: "deleteExcludeFilter",
        todo: { filter: { kind: ["music", "none", "pv", "cm"] } },
      }),
  },
]

export { kindCheckboxFilterItems }
