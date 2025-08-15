import { cn, getEmptyArray } from '@shared/utils/functions'
import { Skeleton } from '@shared/ui/atoms/Skeleton'
import { Button } from '@shared/ui/molecules/Button'
import { forwardRef, memo } from 'react'

import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

import st from './DynamicSectionSelector.module.scss'
import { useDynamicSectionSelector } from './useDynamicSectionSelector'

const DynamicSectionSelector = memo(
  forwardRef<HTMLDivElement, ISectionSelectorChildrenProps>((props, ref) => {
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
          {items.map((item, index) => (
            <Button
              key={index}
              variant="big"
              className={cn(st.slide, {
                [st.slide_active]: activeTab === index,
              })}
              onClick={() => onSwitchTab(index)}
            >
              {item.children}
            </Button>
          ))}
          <div className={st.slideEmpty} />
        </div>
      </div>
    )
  }),
)

DynamicSectionSelector.displayName = 'DynamicSectionSelector'

export { DynamicSectionSelector }
