import { cn } from '@shared/utils/functions'
import { forwardRef, memo } from 'react'

import { ISwitchProps } from '../types/ISwitchProps'

import { useSwitch } from './useSwitch'
import st from './Switch.module.scss'

const Switch = memo(
  forwardRef<HTMLButtonElement, ISwitchProps>((props, ref) => {
    const { variant, className, value, isDisabled, toggle } = useSwitch(props)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(st.root, st[`root_${variant}`], className)}
        onClick={toggle}
        disabled={isDisabled}
      >
        <input
          hidden
          readOnly
          checked={value}
          type="checkbox"
          disabled={isDisabled}
          className={st.input}
        />
        <div className={st.tumbler} />
      </button>
    )
  }),
)

Switch.displayName = 'Switch'

export { Switch }
