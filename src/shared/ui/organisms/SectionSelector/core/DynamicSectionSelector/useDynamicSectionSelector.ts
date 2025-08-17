import useEmblaCarousel from 'embla-carousel-react'
import { Ref, useEffect, useState } from 'react'
import { mergeRefs } from '@shared/utils/functions'

import { ISectionSelectorChildrenProps } from '../../types/ISectionSelectorChildrenProps'

const useDynamicSectionSelector = <T extends string>(
  props: ISectionSelectorChildrenProps<T>,
  ref?: Ref<HTMLDivElement>,
) => {
  const { items, onSwitchTab, activeTab, className } = props

  const [isSliderLoading, setIsSliderLoading] = useState(true)

  const [sliderRef, sliderApi] = useEmblaCarousel({
    dragFree: true,
  })

  const mergedRef = mergeRefs(sliderRef, ref)

  useEffect(() => {
    setIsSliderLoading(false)
  }, [sliderApi])

  return {
    items,
    isSliderLoading,
    mergedRef,
    onSwitchTab,
    activeTab,
    className,
  }
}

export { useDynamicSectionSelector }
