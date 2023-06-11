export interface ISeasonalAnime extends IAnimePoster {
  genres: IGenres[]
  screenshots: string[]
}

export interface IAllGenres {
  genre_id: number
  name: {
    en: string
    ru: string
  }
}

export interface IAnimePoster {
  shiki_id: number
  labels: string
  scores: number
  status: "anons" | "ongoing" | "released"
  episodes: {
    count: number | null
    aired: number | null
  }
}

export interface IAnimeInfo {
  shiki_id: number
  labels: string[]
  poster: string | null
  kind: "tv" | "movie" | "ova" | "ona" | "special" | "music"
  scores: number[]
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
  genres: IGenres[]
  studios: IStudios[]
  relations: {
    franchise: string | null
    animes: { link: IAnimePoster; relation: { en: string; ru: string } }[]
  }
  updateDate: Date
}

export interface IPlatform {
  platform_id: number
  name: string
  icon: string
  url: string
}

export interface IGenres {
  genre_id: number
  name: {
    en: string
    ru: string
  }
}

export interface IStudios {
  studio_id: number
  name: string
  img: string | null
}

export interface INestError {
  response: {
    statusCode: number
    message: string
    error: string
  }
  status: number
  options: object
  message: string
  name: string
}

export interface IKodikPlayerResult {
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

export interface IKodikPlayer {
  time: string
  total: number
  results: IKodikPlayerResult[]
}
