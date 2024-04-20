import { ICatalogAnimesVariables } from "@entities/Anime"

const filterStateDefaultValue: ICatalogAnimesVariables = {
  page: 1,
  dates_airedOn: { from: null, to: null },
  filterInclude: {
    genres_ID_ONLY: [],
    kind: [],
    rating: [],
    status: [],
    studios_ID_ONLY: [],
  },
  filterExclude: {
    genres_ID_ONLY: [],
    kind: [],
    rating: [],
    status: [],
    studios_ID_ONLY: [],
  },
  sort: "scores",
  isFilterNotUsed: true,
}

export { filterStateDefaultValue }
