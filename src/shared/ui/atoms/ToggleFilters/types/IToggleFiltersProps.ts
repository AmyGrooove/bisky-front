import { IForwardRefComponent } from '@shared/types'

import { IToggleFilterItem } from './IToggleFilterItem'

interface IToggleFiltersProps<T extends string = string> {
  items: IToggleFilterItem<T>[]
  activeToggleFilters: T[]
  onChangeItems: (value: T[]) => void

  variant?: 'big' | 'small'
  className?: string
}

type TToggleFiltersComponent = IForwardRefComponent<IToggleFiltersProps<string>>

export type { IToggleFiltersProps, TToggleFiltersComponent }
