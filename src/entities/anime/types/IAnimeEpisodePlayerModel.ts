type TDubType = 'subtitles' | 'voiced'

type TPlayerType = 'Kodik'

interface IPlayerLink {
  playerType: TPlayerType
  url: string
}

interface IAnimeEpisodePlayerModel {
  _id: string
  episode: string
  dubClub: string
  dubType: TDubType
  dubPersons: string[]
  links: IPlayerLink[]
}

export type { IAnimeEpisodePlayerModel }
