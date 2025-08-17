import { IStaticSectionSelectorProps } from '../../types/IStaticSectionSelectorProps'

const useStaticSectionSelector = <T extends string>(
  props: IStaticSectionSelectorProps<T>,
) => {
  const {
    items,
    onSwitchTab,
    activeTab,
    className,
    variant = 'horizontal',
  } = props

  return { items, onSwitchTab, activeTab, className, variant }
}

export { useStaticSectionSelector }
