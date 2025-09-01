interface IBaseSkeletonProps {
  className?: string
  isFlexShrinkEnabled?: boolean
}

interface ISkeletonDefaultProps extends IBaseSkeletonProps {
  templates?: 'none'
}

interface ISkeletonBadgeProps extends IBaseSkeletonProps {
  templates?: 'badge'
  variant?: 'big' | 'medium' | 'small'
}

interface ISkeletonAnimeCardProps extends IBaseSkeletonProps {
  templates?: 'animeCard'
  variant?: 'big' | 'small'
}

interface ISkeletonSeasonalAnimeCardProps extends IBaseSkeletonProps {
  templates?: 'seasonalAnimeCard'
  variant?: 'big' | 'small'
}

interface ISkeletonAnimeCardCarouselRowProps extends IBaseSkeletonProps {
  templates?: 'animeCardCarouselRow'
  variant?: 'big' | 'small'
}

interface ISkeletonFactCardProps extends IBaseSkeletonProps {
  templates?: 'factCard'
  variant?: 'big' | 'small'
}

interface ISkeletonBigButtonProps extends IBaseSkeletonProps {
  templates?: 'bigButton'
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
  | ISkeletonAnimeCardCarouselRowProps
  | ISkeletonFactCardProps
  | ISkeletonBigButtonProps

export type {
  TSkeletonProps,
  ISkeletonBadgeProps,
  ISkeletonAnimeCardProps,
  ISkeletonSeasonalAnimeCardProps,
  ISkeletonSectionLabelProps,
  ISkeletonAnimeCardCarouselRowProps,
  ISkeletonFactCardProps,
  ISkeletonBigButtonProps,
}
