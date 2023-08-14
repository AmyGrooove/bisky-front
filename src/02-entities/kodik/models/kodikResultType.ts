type KodikResultType = {
  id: string
  type:
    | "anime"
    | "anime-serial"
    | "foreign-movie"
    | "foreign-serial"
    | "russian-movie"
  link: string
  title: string
  title_orig: string
  other_title?: string
  translation: {
    id: number
    title: string
    type: "subtitles" | "voice"
  }
  year: number
  last_season?: number
  last_episode?: number
  episodes_count?: number
  kinopoisk_id?: string
  imdb_id?: string
  quality: string
  camrip: boolean
  lgbt: boolean
  blocked_countries: []
  blocked_seasons?: object
  created_at: Date
  updated_at: Date
  screenshots: string[]
  worldart_link?: string
  shikimori_id?: string
  mdl_id?: string
}

export type { KodikResultType }
