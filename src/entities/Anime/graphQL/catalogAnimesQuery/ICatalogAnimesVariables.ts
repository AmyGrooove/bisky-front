import { EStatus, ERating, EKind } from "@entities/Anime"

interface ICatalogAnimesVariables {
  page: number
  dates_airedOn: { from: number; to: number }
  filterInclude: {
    genres_ID: string[]
    kind: (keyof typeof EKind)[]
    rating: (keyof typeof ERating)[]
    status: (keyof typeof EStatus)[]
    studios_ID: string[]
  }
  filterExclude: {
    genres_ID: string[]
    kind: (keyof typeof EKind)[]
    rating: (keyof typeof ERating)[]
    status: (keyof typeof EStatus)[]
    studios_ID: string[]
  }
  sort: "scores" | "dates"
}

export type { ICatalogAnimesVariables }
