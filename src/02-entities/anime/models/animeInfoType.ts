import { GenreType } from "@/entities/genre"
import { StudioType } from "@/entities/studio"

import { AnimeRatingEnum } from "./animeRatingEnum"
import { ShortAnimeInfoType } from "./shortAnimeInfoType"
import { AnimeEpisodesType } from "./animeEpisodesType"
import { AnimeDatesType } from "./animeDatesType"

type AnimeInfoType = ShortAnimeInfoType & {
  episodes: AnimeEpisodesType
  dates: AnimeDatesType
  rating: AnimeRatingEnum
  description: string | null
  screenshots: string[]
  videos: string[]
  genres: GenreType[]
  studios: StudioType[]
  franchise: {
    name: string | null
    animes: Array<ShortAnimeInfoType & { relation: { en: string; ru: string } }>
  } | null
  updateDate: Date
}

export type { AnimeInfoType }
