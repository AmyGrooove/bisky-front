import { useMemo } from 'react'

import { IFactCardProps } from '../types/IFactCardProps'

const useFactCard = (props: IFactCardProps) => {
  const {
    text,
    source = null,
    author = null,
    className,
    variant = 'big',
  } = props

  const authorBadgeVariant: 'small' | 'medium' = useMemo(
    () => (variant === 'big' ? 'medium' : 'small'),
    [variant],
  )

  return {
    text,
    source,
    author,
    className,
    variant,
    authorBadgeVariant,
  }
}

export { useFactCard }
