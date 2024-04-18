import { EStatus, ERating, EKind } from "@entities/Anime"

interface ICatalogAnimesVariables {
  page: number
  dates_airedOn: { from: number; to: number }
  filterInclude: {
    genres_ID_ONLY: string[]
    kind: (keyof typeof EKind)[]
    rating: (keyof typeof ERating)[]
    status: (keyof typeof EStatus)[]
    studios_ID_ONLY: string[]
  }
  filterExclude: {
    genres_ID_ONLY: string[]
    kind: (keyof typeof EKind)[]
    rating: (keyof typeof ERating)[]
    status: (keyof typeof EStatus)[]
    studios_ID_ONLY: string[]
  }
  sort: "scores" | "dates"
}

export type { ICatalogAnimesVariables }
