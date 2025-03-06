import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

import { useSectionSelector } from './useSectionSelector'
import st from './SectionSelector.module.scss'

const SectionSelector = (props: ISectionSelectorProps) => {
  const { className, items, onSwitchTab, elementsVariant, variant, activeTab } =
    useSectionSelector(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      {items.map(({ Icon, children, isDisabled = false }, index) => (
        <div
          key={index}
          className={cn(st.tab, st[`tab_${elementsVariant}`], {
            [st.tab_active]: activeTab === index,
            [st.tab_disabled]: isDisabled,
          })}
          onClick={() => onSwitchTab(index)}
        >
          {Icon && Icon({ className: st.icon })}
          <Text
            className={cn(st.children, {
              [st.children_row]: elementsVariant === 'row',
            })}
            weight="700"
          >
            {children}
          </Text>
        </div>
      ))}
    </div>
  )
}

export { SectionSelector }
