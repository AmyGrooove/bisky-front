import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

const useStaticSectionSelector = <T extends string>(
  props: ISectionSelectorChildrenProps<T>,
) => {
  const { items, onSwitchTab, activeTab, className } = props

  return { items, onSwitchTab, activeTab, className }
}

export { useStaticSectionSelector }
