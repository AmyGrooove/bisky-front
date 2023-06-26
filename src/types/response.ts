export interface JWTDecoded {
  id: string
  username: string
  iat: number
  exp: number
}

export interface IFilter {
  [key: string]: any
  kind?: "movie" | "music" | "ona" | "ova" | "special" | "tv"
  status?: "anons" | "ongoing" | "released"
  rating?: "g" | "none" | "pg" | "pg_13" | "r" | "r_plus" | "rx"
  airedOn?: {
    [key: string]: any
    from?: Date
    to?: Date
  }
  genres?: number[]
  studios?: number[]
  franchiseName?: string
}

export interface ISort {
  [key: string]: any
  scores?: boolean
  airedOn?: boolean
  updateDate?: boolean
}
