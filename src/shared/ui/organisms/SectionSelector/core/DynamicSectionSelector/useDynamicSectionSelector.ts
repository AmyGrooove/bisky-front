import useEmblaCarousel from 'embla-carousel-react'
import { Ref } from 'react'
import { mergeRefs } from '@shared/utils/functions'

import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

const useDynamicSectionSelector = (
  props: ISectionSelectorChildrenProps,
  ref?: Ref<HTMLDivElement>,
) => {
  const { items, onSwitchTab, activeTab, className } = props

  const [sliderRef, sliderApi] = useEmblaCarousel({
    dragFree: true,
  })

  const mergedRef = mergeRefs(sliderRef, ref)
  const isSliderLoading = !sliderApi

  return {
    items,
    isSliderLoading,
    sliderRef: mergedRef,
    onSwitchTab,
    activeTab,
    className,
  }
}

export { useDynamicSectionSelector }
