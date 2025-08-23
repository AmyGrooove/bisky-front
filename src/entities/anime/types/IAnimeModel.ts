type TKind = 'tv' | 'movie' | 'ova' | 'ona' | 'special'

type TRating = 'g' | 'pg' | 'pg13' | 'r' | 'rPlus'

type TStatus = 'anons' | 'ongoing' | 'released'

type TRelation =
  | 'adaptation'
  | 'alternativeSetting'
  | 'alternativeVersion'
  | 'character'
  | 'fullStory'
  | 'other'
  | 'parentStory'
  | 'prequel'
  | 'sequel'
  | 'sideStory'
  | 'spinOff'
  | 'summary'

interface IAnimeDataUpdateIDs {
  shikimoriID: string | null
  biskyID: string | null
  worldArtLink: string | null
}

interface IRelatedAnime {
  relation: TRelation
  updateIDs: IAnimeDataUpdateIDs
}

interface IAnimeModel {
  _id: string
  name: string
  otherNames: string[]
  description: string
  slug: string
  tags: string[]
  kind: TKind
  rating: TRating
  status: TStatus
  related: IRelatedAnime[]
  updateIDs: IAnimeDataUpdateIDs
  poster: string | null
  nextEpisodeAiredAt: Date | null
  episodeAiredCount: number | null
  episodeCount: number | null
  screenshots: string[]
  airedAt: Date | null
  releasedAt: Date | null
  views: number
  blockedUrl: string | null
}

export type { IAnimeModel }
