import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

const useSectionSelector = (props: ISectionSelectorProps) => {
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
