import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

const useSectionSelector = (props: ISectionSelectorProps) => {
  const {
    items = [],
    activeTab,
    onSwitchTab,
    variant = 'horizontal',
    elementsVariant = 'row',
    className = null,
  } = props

  return {
    className,
    items,
    onSwitchTab,
    elementsVariant,
    variant,
    activeTab,
  }
}

export { useSectionSelector }
