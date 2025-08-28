interface IBaseSkeletonProps {
  className?: string
}

interface ISkeletonDefaultProps extends IBaseSkeletonProps {
  templates?: 'none'
}

interface ISkeletonCardProps extends IBaseSkeletonProps {
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
  | ISkeletonCardProps
  | ISkeletonSectionLabelProps

export type { TSkeletonProps }
