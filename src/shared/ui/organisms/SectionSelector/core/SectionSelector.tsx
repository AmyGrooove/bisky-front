import { forwardRef, ForwardedRef } from 'react'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

import { DynamicSectionSelector } from './DynamicSectionSelector/DynamicSectionSelector'
import { StaticSectionSelector } from './StaticSectionSelector/StaticSectionSelector'
import { useSectionSelector } from './useSectionSelector'

const SectionSelectorInner = <T extends string>(
  props: ISectionSelectorProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
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
}

const SectionSelector = forwardRef(SectionSelectorInner)

export { SectionSelector }
