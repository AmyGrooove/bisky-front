import { cn } from '@shared/utils/functions'

import { ISwitchProps } from '../types/ISwitchProps'

import { useSwitch } from './useSwitch'
import st from './Switch.module.scss'

const Switch = (props: ISwitchProps) => {
  const { variant, className, value, isDisabled, setChecked } = useSwitch(props)

  return (
    <button
      className={cn(st.root, st[`root_${variant}`], className)}
      onClick={setChecked}
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
}

export { Switch }
