import { ForwardedRef, ReactElement } from 'react'

import { ITabItem } from './ITabItem'

interface ISectionSelectorChildrenProps<T extends string = string> {
  items: ITabItem<T>[]
  activeTab: T
  onSwitchTab: (value: T) => void

  className?: string
}

interface ISectionSelectorComponent {
  <T extends string>(
    props: ISectionSelectorChildrenProps<T> & {
      ref?: ForwardedRef<HTMLDivElement>
    },
  ): ReactElement
  displayName?: string
}

export type { ISectionSelectorChildrenProps, ISectionSelectorComponent }
