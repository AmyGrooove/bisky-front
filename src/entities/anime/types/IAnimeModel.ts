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
}

export type { IAnimeModel }
