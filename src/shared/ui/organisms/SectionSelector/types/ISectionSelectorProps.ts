import { ISectionSelectorChildrenProps } from './ISectionSelectorChildrenProps'

interface ISectionSelectorProps<T extends string = string>
  extends ISectionSelectorChildrenProps<T> {
  variant?: 'static' | 'dynamic'
}

export type { ISectionSelectorProps }
