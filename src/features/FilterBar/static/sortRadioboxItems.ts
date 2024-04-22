import { IFilterState } from "@appData/catalog"

const sortRadioboxItems = (updateFilters: (value: IFilterState) => void) => [
  {
    label: "По рейтингу",
    value: "scores",
    setSortValue: () =>
      updateFilters({
        type: "changeSort",
        todo: { sort: "scores" },
      }),
  },
  {
    label: "По дате выхода",
    value: "dates",
    setSortValue: () =>
      updateFilters({
        type: "changeSort",
        todo: { sort: "dates" },
      }),
  },
]

export { sortRadioboxItems }
