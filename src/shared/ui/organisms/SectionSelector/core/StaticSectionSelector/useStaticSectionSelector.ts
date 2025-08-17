import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

const useStaticSectionSelector = <T extends string>(
  props: ISectionSelectorChildrenProps<T>,
) => {
  const {
    items,
    onSwitchTab,
    activeTab,
    className,
    orientation = 'horizontal',
  } = props

  return { items, onSwitchTab, activeTab, className, orientation }
}

export { useStaticSectionSelector }
