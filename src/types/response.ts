import { KindEnum, StatusEnum, RatingEnum } from "./enums"

export interface JWTDecoded {
  id: string
  username: string
  iat: number
  exp: number
}

export interface IFilter {
  [key: string]: any
  kind?: KindEnum
  status?: StatusEnum
  rating?: RatingEnum
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
