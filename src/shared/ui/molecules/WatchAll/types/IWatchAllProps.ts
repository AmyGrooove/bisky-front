interface IWatchAllProps {
  onClick: () => void

  label?: string
  type?: 'anime' | 'collection'
  variant?: 'big' | 'small'
  className?: string
  ariaLabel?: string
}

export type { IWatchAllProps }
