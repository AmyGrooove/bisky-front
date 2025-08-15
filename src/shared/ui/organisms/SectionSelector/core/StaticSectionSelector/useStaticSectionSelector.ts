import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

const useStaticSectionSelector = (props: ISectionSelectorChildrenProps) => {
  const { items, onSwitchTab, activeTab, className } = props

  return { items, onSwitchTab, activeTab, className }
}

export { useStaticSectionSelector }
