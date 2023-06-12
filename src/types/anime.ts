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
