import { ITabItem } from './ITabItem'

interface ISectionSelectorProps {
  items: ITabItem[]
  activeTab: number
  onSwitchTab: (value: number) => void

  variant?: 'vertical' | 'horizontal'
  elementsVariant?: 'column' | 'row'
  className?: string
}

export type { ISectionSelectorProps }
