import { IForwardRefComponent } from '@shared/types'

interface ITagsProps<T extends string = string> {
  items: Set<T>
  onChangeItems: (value: Set<T>) => void

  variant?: 'big' | 'small'
  className?: string
}

type TTagsComponent = IForwardRefComponent<ITagsProps<string>>

export type { ITagsProps, TTagsComponent }
