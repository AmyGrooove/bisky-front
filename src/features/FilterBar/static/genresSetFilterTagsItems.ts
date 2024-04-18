import { IFilterState } from "@appData/catalog"
import { ICatalogAnimesVariables } from "@entities/Anime"
import { IGetAllGenresIdAndNamesResponse } from "@entities/Genre"

const genresSetFilterTagsItems = (
  genresData: IGetAllGenresIdAndNamesResponse[],
  filterState: ICatalogAnimesVariables,
  updateFilters: (value: IFilterState) => void,
) =>
  genresData.map((item) => ({
    isSelected: filterState.filterInclude.genres_ID_ONLY.includes(item._id),
    label: item.name.ru ?? item.name.en ?? "",
    value: item._id,
    includeItem: () =>
      updateFilters({
        type: "addFilter",
        todo: { filter: { genres_ID_ONLY: [item._id] } },
      }),
    deleteIncludeItem: () =>
      updateFilters({
        type: "deleteAddFilter",
        todo: { filter: { genres_ID_ONLY: [item._id] } },
      }),
  }))

export { genresSetFilterTagsItems }
