import { cn } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, memo } from 'react'

import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

import st from './StaticSectionSelector.module.scss'
import { useStaticSectionSelector } from './useStaticSectionSelector'

const StaticSectionSelector = memo(
  forwardRef<HTMLDivElement, ISectionSelectorChildrenProps>((props, ref) => {
    const { items, onSwitchTab, activeTab, className } =
      useStaticSectionSelector(props)

    return (
      <div ref={ref} className={cn(st.root, className)}>
        {items.map((item, index) => (
          <Button
            key={index}
            variant="big"
            className={cn(st.tab, { [st.tab_active]: activeTab === index })}
            onClick={() => onSwitchTab(index)}
          >
            {item.children}
          </Button>
        ))}
      </div>
    )
  }),
)

StaticSectionSelector.displayName = 'StaticSectionSelector'

export { StaticSectionSelector }
