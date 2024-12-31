import { TStatus, TRating, TKind } from "@entities/Anime"

interface ICatalogAnimesVariables {
  page: number
  dates_airedOn: { from: number | null; to: number | null }
  filterInclude: {
    genres_ID_ONLY: string[]
    kind: TKind[]
    rating: TRating[]
    status: TStatus[]
    studios_ID_ONLY: string[]
  }
  filterExclude: {
    genres_ID_ONLY: string[]
    kind: TKind[]
    rating: TRating[]
    status: TStatus[]
    studios_ID_ONLY: string[]
  }
  sort: "scores" | "dates"
}

export type { ICatalogAnimesVariables }
