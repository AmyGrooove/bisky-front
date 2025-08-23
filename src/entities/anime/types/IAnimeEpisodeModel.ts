interface IAnimeEpisodeModel {
  _id: string
  animeID: string
  order: number
  name: string | null
  arch: string | null
  airedAt: string | null
  isFiller: boolean
  duration: number | null
  previewImage: string | null
  isParsed: boolean
}

export type { IAnimeEpisodeModel }
