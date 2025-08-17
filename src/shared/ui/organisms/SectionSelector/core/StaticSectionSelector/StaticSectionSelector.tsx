import { cn } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, ForwardedRef } from 'react'

import {
  ISectionSelectorChildrenProps,
  TSectionSelectorChildrenComponent,
} from '../../types/ISectionSelectorChildrenProps'

import st from './StaticSectionSelector.module.scss'
import { useStaticSectionSelector } from './useStaticSectionSelector'

const StaticSectionSelectorInner = <T extends string>(
  props: ISectionSelectorChildrenProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { items, onSwitchTab, activeTab, className, orientation } =
    useStaticSectionSelector(props)

  return (
    <div
      ref={ref}
      className={cn(st.root, st[`root_${orientation}`], className)}
    >
      {items.map((item) => (
        <Button
          key={item.value}
          variant="big"
          className={cn(st.tab, { [st.tab_active]: activeTab === item.value })}
          onClick={() => onSwitchTab(item.value)}
        >
          {item.children}
        </Button>
      ))}
    </div>
  )
}

const StaticSectionSelector = forwardRef(
  StaticSectionSelectorInner,
) as TSectionSelectorChildrenComponent

StaticSectionSelector.displayName = 'StaticSectionSelector'

export { StaticSectionSelector }
