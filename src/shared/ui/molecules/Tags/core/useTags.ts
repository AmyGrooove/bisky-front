import { useCallback } from 'react'

import { ITagsProps } from '../types/ITagsProps'

const useTags = <T extends string>(props: ITagsProps<T>) => {
  const { items, onChangeItems, variant = 'big', className } = props

  const removeTag = useCallback(
    (value: T) => {
      const newActiveTags = new Set([...items].filter((item) => item !== value))

      onChangeItems(newActiveTags)
    },
    [items, onChangeItems],
  )

  return { removeTag, items, variant, className }
}

export { useTags }
