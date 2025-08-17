import { IToggleFiltersProps } from '../types/IToggleFiltersProps'

const useToggleFilters = <T extends string>(props: IToggleFiltersProps<T>) => {
  const {
    items,
    activeToggleFilters,
    onChangeItems,
    variant = 'big',
    className,
  } = props

  const activeToggleFiltersSet = new Set(activeToggleFilters)

  const isActive = (value: T) => activeToggleFiltersSet.has(value)

  const toggle = (value: T) => {
    const newActiveToggleFilters = isActive(value)
      ? activeToggleFilters.filter((item) => item !== value)
      : [...activeToggleFilters, value]

    onChangeItems(newActiveToggleFilters)
  }

  return { toggle, items, variant, className, isActive }
}

export { useToggleFilters }
