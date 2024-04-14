import { IAnimeFullModel } from "@entities/Anime"
import { IGenreFullModel } from "@entities/Genre"

interface IGetHomeDataResponse {
  bestAnimes: IAnimeFullModel[]
  newSeriesAnimes: IAnimeFullModel[]
  seasonAnimes: IAnimeFullModel[]
  homeGenres: IGenreFullModel[]
}

export type { IGetHomeDataResponse }
