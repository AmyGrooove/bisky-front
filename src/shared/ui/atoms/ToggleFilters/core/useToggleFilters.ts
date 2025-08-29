import { useCallback, useMemo } from 'react'

import { IToggleFiltersProps } from '../types/IToggleFiltersProps'

const useToggleFilters = <T extends string>(props: IToggleFiltersProps<T>) => {
  const {
    items,
    activeToggleFilters,
    onChangeItems,
    variant = 'big',
    className,
  } = props

  const activeToggleFiltersSet = useMemo(
    () => new Set(activeToggleFilters),
    [activeToggleFilters],
  )

  const isActive = useCallback(
    (value: T) => activeToggleFiltersSet.has(value),
    [activeToggleFiltersSet],
  )

  const toggle = useCallback(
    (value: T) => {
      const newActiveToggleFilters = isActive(value)
        ? activeToggleFilters.filter((item) => item !== value)
        : [...activeToggleFilters, value]

      onChangeItems(newActiveToggleFilters)
    },
    [activeToggleFilters, isActive, onChangeItems],
  )

  return { toggle, items, variant, className, isActive }
}

export { useToggleFilters }
