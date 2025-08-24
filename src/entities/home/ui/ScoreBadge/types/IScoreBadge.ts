interface IScoreBadge {
  score: number | null

  variant?: 'small' | 'medium' | 'big'
  className?: string
}

export type { IScoreBadge }
