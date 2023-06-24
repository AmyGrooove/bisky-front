export interface IPoster {
  shiki_id: number
  labels: string
  scores: number
  status: "anons" | "ongoing" | "released"
  episodes: {
    count: number | null
    aired: number | null
  }
}

export interface ISeason {
  shiki_id: number
  labels: string
  scores: number
  screenShots: string[]
  genres: string[]
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

export interface IAnimeInfo {
  id: number
  labels: string[]
  poster: string | null
  kind: "tv" | "movie" | "ova" | "ona" | "special" | "music"
  scores: number
  anotherScores: number[]
  status: "anons" | "ongoing" | "released"
  episodes: {
    count: number | null
    aired: number | null
    duration: number
    nextEpisodeAt: Date | null
  }
  dates: {
    airedOn: Date | null
    releasedOn: Date | null
  }
  rating: "none" | "g" | "pg" | "pg_13" | "r" | "r_plus" | "rx"
  description: string | null
  screenshots: string[]
  videos: string[]
  genres: IGenre[]
  franchise: IFranchise
  studios: IStudio[]
  updateDate: Date
}

export interface IGenre {
  hentai: boolean
  linkId: {
    anime: number
    manga: number
  }
  name: {
    en: string
    ru: string
  }
}

export interface IFranchise {
  name: string
  animes: {
    id: number
    labels: string[]
    poster: string | null
    kind: "tv" | "movie" | "ova" | "ona" | "special" | "music"
    scores: number
    anotherScores: number[]
    status: "anons" | "ongoing" | "released"
    relation: {
      en: string
      ru: string
    }
  }[]
}

export interface IStudio {
  id: number
  name: string
  img: string | null
}

export interface IUser {
  username: string
  name: string
  email: string
  role: string
  image: string
  accessToken?: string | null
  refreshToken?: string | null
}

export interface JWTDecoded {
  id: string
  username: string
  iat: number
  exp: number
}
