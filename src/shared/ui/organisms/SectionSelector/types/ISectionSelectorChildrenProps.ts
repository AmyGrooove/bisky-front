import { IForwardRefComponent } from '@shared/types'

import { ITabItem } from './ITabItem'

interface ISectionSelectorChildrenProps<T extends string = string> {
  items: ITabItem<T>[]
  activeTab: T
  onSwitchTab: (value: T) => void

  className?: string
}

type TSectionSelectorChildrenComponent = IForwardRefComponent<
  ISectionSelectorChildrenProps<string>
>

export type { ISectionSelectorChildrenProps, TSectionSelectorChildrenComponent }
