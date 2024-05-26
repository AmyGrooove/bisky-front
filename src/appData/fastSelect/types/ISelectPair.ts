import { IAnimeSimpleModel } from "@entities/Anime"

interface ISelectAnime {
  arrayNumber: number
  animeData: IAnimeSimpleModel
}

interface ISelectPair {
  choice1: ISelectAnime | null
  choice2: ISelectAnime | null
}

export type { ISelectPair, ISelectAnime }
