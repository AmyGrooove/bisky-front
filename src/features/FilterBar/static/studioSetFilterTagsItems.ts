import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"
import { IGetAllStudiosIdAndNamesResponse } from "@entities/Studio"

const studioSetFilterTagsItems = (
  studiosData: IGetAllStudiosIdAndNamesResponse[],
  filterState: ICatalogAnimesVariables,
  updateFilters: (value: IFilterState) => void,
) =>
  studiosData.map((item) => ({
    isSelected: filterState.filterInclude.studios_ID_ONLY.includes(item._id),
    label: item.name ?? "",
    value: item._id,
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { studios_ID_ONLY: [item._id] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { studios_ID_ONLY: [item._id] } },
      }),
  }))

export { studioSetFilterTagsItems }
