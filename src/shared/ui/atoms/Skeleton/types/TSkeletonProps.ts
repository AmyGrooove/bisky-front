interface IBaseSkeletonProps {
  className?: string
}

interface ISkeletonDefaultProps extends IBaseSkeletonProps {
  templates?: 'none'
}

interface ISkeletonAnimeCardProps extends IBaseSkeletonProps {
  templates?: 'animeCard'
  variant?: 'big' | 'small'
}

type TSkeletonProps = ISkeletonDefaultProps | ISkeletonAnimeCardProps

export type { TSkeletonProps }
