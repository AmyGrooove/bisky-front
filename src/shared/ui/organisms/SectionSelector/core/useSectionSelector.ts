import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

const useSectionSelector = <T extends string>(
  props: ISectionSelectorProps<T>,
) => {
  const {
    items = [],
    activeTab,
    onSwitchTab,
    variant = 'static',
    className,
  } = props

  return {
    className,
    items,
    onSwitchTab,
    variant,
    activeTab,
  }
}

export { useSectionSelector }
