interface IBaseSkeletonProps {
  className?: string
}

interface ISkeletonDefaultProps extends IBaseSkeletonProps {
  templates?: 'none'
}

interface ISkeletonBadgeProps extends IBaseSkeletonProps {
  templates?: 'badge'
  variant?: 'big' | 'medium' | 'small'
}

interface ISkeletonAnimeCardProps extends IBaseSkeletonProps {
  templates?: 'animeCard' | 'seasonalAnimeCard'
  variant?: 'big' | 'small'
}

interface ISkeletonSeasonalAnimeCardProps extends IBaseSkeletonProps {
  templates?: 'animeCard' | 'seasonalAnimeCard'
  variant?: 'big' | 'small'
}

interface ISkeletonSectionLabelProps extends IBaseSkeletonProps {
  templates?: 'sectionLabel'
  variant?: 'big' | 'small'
  isLinkEnabled?: boolean
}

type TSkeletonProps =
  | ISkeletonDefaultProps
  | ISkeletonBadgeProps
  | ISkeletonSectionLabelProps
  | ISkeletonAnimeCardProps
  | ISkeletonSeasonalAnimeCardProps

export type {
  TSkeletonProps,
  ISkeletonBadgeProps,
  ISkeletonAnimeCardProps,
  ISkeletonSeasonalAnimeCardProps,
  ISkeletonSectionLabelProps,
}
