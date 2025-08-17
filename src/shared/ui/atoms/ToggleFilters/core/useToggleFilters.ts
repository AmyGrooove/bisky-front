import { IToggleFiltersProps } from '../types/IToggleFiltersProps'

const useToggleFilters = <T extends string>(props: IToggleFiltersProps<T>) => {
  const {
    items,
    activeToggleFilters,
    onChangeItems,
    variant = 'big',
    className,
  } = props

  const checkIsInActive = (value: T) => {
    const activeToggleFiltersSet = new Set(activeToggleFilters)

    return activeToggleFiltersSet.has(value)
  }

  const addTag = (value: T) => {
    const newActiveToggleFilters = [...activeToggleFilters, value]

    onChangeItems(newActiveToggleFilters)
  }

  const removeTag = (value: T) => {
    const newActiveToggleFilters = [...activeToggleFilters].filter(
      (item) => item !== value,
    )

    onChangeItems(newActiveToggleFilters)
  }

  const toggle = (value: T) => {
    const isActive = checkIsInActive(value)

    if (isActive) {
      removeTag(value)
    } else {
      addTag(value)
    }
  }

  return { toggle, items, variant, className, checkIsInActive }
}

export { useToggleFilters }
