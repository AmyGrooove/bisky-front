import { forwardRef, ForwardedRef, memo } from 'react'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

import { DynamicSectionSelector } from './DynamicSectionSelector/DynamicSectionSelector'
import { StaticSectionSelector } from './StaticSectionSelector/StaticSectionSelector'
import { useSectionSelector } from './useSectionSelector'

const SectionSelector = memo(
  forwardRef(function ToggleFiltersInner<T extends string>(
    props: ISectionSelectorProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    const { className, items, onSwitchTab, variant, activeTab, orientation } =
      useSectionSelector(props)

    if (variant === 'dynamic')
      return (
        <DynamicSectionSelector
          ref={ref}
          items={items}
          className={className}
          activeTab={activeTab}
          onSwitchTab={onSwitchTab as (value: string) => void}
          orientation={orientation}
        />
      )

    return (
      <StaticSectionSelector
        ref={ref}
        items={items}
        className={className}
        activeTab={activeTab}
        onSwitchTab={onSwitchTab as (value: string) => void}
        orientation={orientation}
      />
    )
  }),
)

SectionSelector.displayName = 'SectionSelector'

export { SectionSelector }
