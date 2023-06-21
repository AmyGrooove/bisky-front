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
    next_episode_at: Date | null
  }
  dates: {
    aired_on: Date | null
    released_on: Date | null
  }
  rating: "none" | "g" | "pg" | "pg_13" | "r" | "r_plus" | "rx"
  description: string | null
  screenshots: string[]
  videos: string[]
  genres: IGenre[]
  franshise: IFranshise
  studios: IStudio[]
  updateDate: Date
}

export interface IGenre {
  id: number
  name: {
    en: string
    ru: string
  }
  type: "anime" | "manga" | null
}

export interface IFranshise {
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
  id: string
  username: string
  email: string
  created_at: string
  image: string
}
