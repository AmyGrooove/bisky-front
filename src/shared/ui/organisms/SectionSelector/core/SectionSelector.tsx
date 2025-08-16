import { forwardRef } from 'react'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

import { DynamicSectionSelector } from './DynamicSectionSelector/DynamicSectionSelector'
import { StaticSectionSelector } from './StaticSectionSelector/StaticSectionSelector'
import { useSectionSelector } from './useSectionSelector'

const SectionSelector = forwardRef<HTMLDivElement, ISectionSelectorProps>(
  (props, ref) => {
    const { className, items, onSwitchTab, variant, activeTab } =
      useSectionSelector(props)

    if (variant === 'dynamic')
      return (
        <DynamicSectionSelector
          ref={ref}
          items={items}
          className={className}
          activeTab={activeTab}
          onSwitchTab={onSwitchTab}
        />
      )

    return (
      <StaticSectionSelector
        ref={ref}
        items={items}
        className={className}
        activeTab={activeTab}
        onSwitchTab={onSwitchTab}
      />
    )
  },
)

SectionSelector.displayName = 'SectionSelector'

export { SectionSelector }
