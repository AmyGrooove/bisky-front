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
  poster: string
  kind: string
  scores: number
  anotherScores: number[]
  status: string
  episodes: {
    count: number
    aired: number
    duration: number
    next_episode_at: Date
  }
  dates: {
    aired_on: Date
    released_on: Date
  }
  rating: "none" | "g" | "pg" | "pg_13" | "r" | "r_plus" | "rx"
  description: string
  screenshots: string[]
  videos: string[]
  genres: number[]
  studios: number[]
  franshise: {
    name: string
    animes: {
      id: number
      relation: {
        en: string
        ru: string
      }
    }[]
  }
  updateDate: Date
}

export interface IUser {
  id: string
  username: string
  email: string
  created_at: string
  image: string
}
