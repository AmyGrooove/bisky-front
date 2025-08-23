type TDubType = 'subtitles' | 'voiced'

type TPlayerType = 'Kodik'

interface IPlayerLink {
  playerType: TPlayerType
  url: string
}

interface IAnimeEpisodePlayerModel {
  episode: string
  dubClub: string
  dubType: TDubType
  links: IPlayerLink[]
}

export type { IAnimeEpisodePlayerModel }
