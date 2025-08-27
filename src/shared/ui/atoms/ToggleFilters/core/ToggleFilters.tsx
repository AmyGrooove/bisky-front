import { ForwardedRef, forwardRef } from 'react'
import { cn } from '@shared/utils/functions'

import {
  IToggleFiltersProps,
  TToggleFiltersComponent,
} from '../types/IToggleFiltersProps'

import { useToggleFilters } from './useToggleFilters'
import st from './ToggleFilters.module.scss'

const ToggleFiltersInner = <T extends string>(
  props: IToggleFiltersProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { toggle, items, variant, className, isActive } =
    useToggleFilters(props)

  return (
    <div ref={ref} className={cn(st.root, st[`root_${variant}`], className)}>
      {items.map((tag) => (
        <button
          onClick={() => toggle(tag.value)}
          key={tag.value}
          className={cn(st.tag, {
            [st.tag_active]: isActive(tag.value),
          })}
          type="button"
        >
          {tag.children}
        </button>
      ))}
    </div>
  )
}

const ToggleFilters = forwardRef(ToggleFiltersInner) as TToggleFiltersComponent

ToggleFilters.displayName = 'ToggleFilters'

export { ToggleFilters }
