import { IForwardRefComponent } from '@shared/types'

import { ISectionSelectorChildrenProps } from './ISectionSelectorChildrenProps'

interface IStaticSectionSelectorProps<T extends string = string>
  extends ISectionSelectorChildrenProps<T> {
  variant?: 'vertical' | 'horizontal'
}

type TStaticSectionSelectorComponent = IForwardRefComponent<
  IStaticSectionSelectorProps<string>
>

export type { IStaticSectionSelectorProps, TStaticSectionSelectorComponent }
