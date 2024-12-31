import { TKind, TRating, TStatus } from "@entities/Anime"

interface IFilterType {
  page?: number
  dates_airedOn?: { from?: number | null; to?: number | null }
  filter?: {
    genres_ID_ONLY?: string[]
    kind?: TKind[]
    rating?: TRating[]
    status?: TStatus[]
    studios_ID_ONLY?: string[]
  }
  sort?: "scores" | "dates"
}

type TFilterActions =
  | "addFilter"
  | "excludeFilter"
  | "deleteAddFilter"
  | "deleteExcludeFilter"
  | "changeSort"
  | "changePage"
  | "changeDate"
  | "reset"

interface IFilterState {
  type: TFilterActions
  todo: IFilterType
}

export type { IFilterState, IFilterType }
