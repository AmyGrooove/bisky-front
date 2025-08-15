import { ITabItem } from './ITabItem'

interface ISectionSelectorChildrenProps {
  items: ITabItem[]
  activeTab: number
  onSwitchTab: (value: number) => void

  className?: string
}

export type { ISectionSelectorChildrenProps }
