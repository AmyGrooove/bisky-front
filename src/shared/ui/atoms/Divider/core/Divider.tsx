import { cn } from '@shared/utils/functions'

import { IDividerProps } from '../types/IDividerProps'

import { useDivider } from './useDivider'
import st from './Divider.module.scss'

const Divider = (props: IDividerProps) => {
  const { variant, className } = useDivider(props)

  return (
    <div
      className={cn(st.root, st[`root_${variant}`], className)}
      role="separator"
      aria-orientation={variant}
    >
      <div className={st.divider} />
    </div>
  )
}

export { Divider }
