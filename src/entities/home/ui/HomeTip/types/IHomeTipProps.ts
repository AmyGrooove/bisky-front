type TTipTypes = 'AniPick' | 'AniBattle' | 'AniJudge' | 'AnimePass'

interface IHomeTipProps {
  type: TTipTypes

  variant?: 'big' | 'small'
  className?: string
}

export type { IHomeTipProps }
