import { cn } from '@shared/utils/functions'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, ForwardedRef } from 'react'

import {
  IStaticSectionSelectorProps,
  TStaticSectionSelectorComponent,
} from '../../types/IStaticSectionSelectorProps'

import st from './StaticSectionSelector.module.scss'
import { useStaticSectionSelector } from './useStaticSectionSelector'

const StaticSectionSelectorInner = <T extends string>(
  props: IStaticSectionSelectorProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { items, onSwitchTab, activeTab, className, variant } =
    useStaticSectionSelector(props)

  return (
    <div
      ref={ref}
      className={cn(
        st.root,
        { [st.root_vertical]: variant === 'vertical' },
        className,
      )}
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
) as TStaticSectionSelectorComponent

StaticSectionSelector.displayName = 'StaticSectionSelector'

export { StaticSectionSelector }
