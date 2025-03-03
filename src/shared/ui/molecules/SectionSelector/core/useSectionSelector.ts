import { useEffect, useRef, useState } from 'react'

import { ISectionSelectorProps } from '../types/ISectionSelectorProps'

const useSectionSelector = (props: ISectionSelectorProps) => {
  const {
    items = [],
    activeTab,
    onSwitchTab,
    variant = 'horizontal',
    elementsVariant = 'row',
    className = null,
  } = props

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  })
  const tabRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab]

    if (currentTab)
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.clientWidth,
        height: currentTab.clientHeight,
        top: currentTab.offsetTop,
      })
  }, [activeTab, items])

  return {
    className,
    indicatorStyle,
    items,
    onSwitchTab,
    tabRefs,
    elementsVariant,
    variant,
    activeTab,
  }
}

export { useSectionSelector }
