export interface ICAnimePoster {
  shiki_id: number
  labels: string[]
  poster: string | null
  kind: "tv" | "movie" | "ova" | "ona" | "special" | "music"
  scores: number[]
  status:
    | "anons"
    | "ongoing"
    | "released"
    | "new_episode"
    | "watching"
    | "watching_plus_one"
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
}
