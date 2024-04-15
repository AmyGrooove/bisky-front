import { EKind, ERating, EStatus } from "@entities/Anime"

interface IFilterType {
  page?: number
  dates_airedOn?: { from?: number; to?: number }
  filter?: {
    genres_ID?: string[]
    kind?: (keyof typeof EKind)[]
    rating?: (keyof typeof ERating)[]
    status?: (keyof typeof EStatus)[]
    studios_ID?: string[]
  }
  sort?: "scores" | "dates"
}

enum EFilterActions {
  addFilter = "addFilter",
  excludeFilter = "excludeFilter",
  deleteAddFilter = "deleteAddFilter",
  deleteExcludeFilter = "deleteExcludeFilter",
  changeSort = "changeSort",
  changePage = "changePage",
  changeDate = "changeDate",
}

interface IFilterState {
  type: keyof typeof EFilterActions
  todo: IFilterType
}

export type { IFilterState, IFilterType, EFilterActions }
