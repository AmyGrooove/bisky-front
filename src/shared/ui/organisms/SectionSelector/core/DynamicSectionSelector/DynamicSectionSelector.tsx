import { cn, getEmptyArray } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, ForwardedRef } from 'react'

import {
  ISectionSelectorChildrenProps,
  ISectionSelectorComponent,
} from '../../types/ISectionSelectorChildrenProps'

import st from './DynamicSectionSelector.module.scss'
import { useDynamicSectionSelector } from './useDynamicSectionSelector'

const DynamicSectionSelectorInner = <T extends string>(
  props: ISectionSelectorChildrenProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    items,
    isSliderLoading,
    sliderRef,
    onSwitchTab,
    activeTab,
    className,
  } = useDynamicSectionSelector(props, ref)

  if (isSliderLoading)
    return (
      <div className={cn(st.skeleton, className)}>
        {getEmptyArray(items.length).map((_, index) => (
          <Skeleton key={index} className={st.skeletonItem} />
        ))}
      </div>
    )

  return (
    <div ref={sliderRef} className={cn(st.root, className)}>
      <div className={st.slider}>
        {items.map((item) => (
          <Button
            key={item.value}
            variant="big"
            className={cn(st.slide, {
              [st.slide_active]: activeTab === item.value,
            })}
            onClick={() => onSwitchTab(item.value)}
          >
            {item.children}
          </Button>
        ))}
        <div className={st.slideEmpty} />
      </div>
    </div>
  )
}

const DynamicSectionSelector = forwardRef(
  DynamicSectionSelectorInner,
) as ISectionSelectorComponent

DynamicSectionSelector.displayName = 'DynamicSectionSelector'

export { DynamicSectionSelector }
