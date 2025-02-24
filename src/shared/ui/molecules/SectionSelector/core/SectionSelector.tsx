import { cn } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

import { useSectionSelector } from './useSectionSelector'
import st from './SectionSelector.module.scss'

const SectionSelector = (props: ISectionSelectorProps) => {
  const {
    className,
    indicatorStyle,
    items,
    onSwitchTab,
    tabRefs,
    elementsVariant,
    variant,
    activeTab,
  } = useSectionSelector(props)

  return (
    <div className={cn(st.root, className, st[`root_${variant}`])}>
      <div
        className={st.tabIndicator}
        style={{
          width: indicatorStyle.width,
          height: indicatorStyle.height,
          left: indicatorStyle.left,
          top: indicatorStyle.top,
        }}
      />
      {items.map(({ Icon, children }, index) => (
        <div
          key={index}
          className={cn(st.tab, st[`tab_${elementsVariant}`], {
            [st.tab_active]: activeTab === index,
          })}
          onClick={() => onSwitchTab(index)}
          ref={(el) => {
            tabRefs.current[index] = el
          }}
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
