import { KindEnum, RatingEnum, StatusEnum } from "./enums"

export interface ShortAnimeInfoType {
  id: number
  labels: string[]
  poster: string | null
  kind: KindEnum
  scores: number
  anotherScores: number[]
  status: StatusEnum
}

export interface AnimeInfoType extends ShortAnimeInfoType {
  episodes: {
    count: number | null
    aired: number | null
    duration: number
    nextEpisodeAt: Date | null
  }
  dates: { airedOn: Date | null; releasedOn: Date | null }
  rating: RatingEnum
  description: string | null
  screenshots: string[]
  videos: string[]
  genres: GenresType[]
  studios: StudiosType[]
  franchise: {
    name: string | null
    animes: { relation: { en: string; ru: string } & ShortAnimeInfoType }[]
  } | null
  updateDate: Date
}

export interface GenresType {
  linkId: {
    anime: number | null
    manga: number
  }
  name: {
    en: string
    ru: string
  }
  hentai: boolean
}

export interface StudiosType {
  id: number
  name: string
  img: string | null
}

export interface UserType {
  username: string
  name: string
  email: string
  role: string
  image: string
  accessToken?: string | null
  refreshToken?: string | null
}
