import { cn } from '@shared/utils/functions'

import { IInputFieldProps } from '../types/IInputFieldProps'

import { useInputField } from './useInputField'
import st from './InputField.module.scss'
import { forwardRef } from 'react'

const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  (props, ref) => {
    const { value, onChange, Icon, className, placeholder, isDisabled } =
      useInputField(props)

    return (
      <div className={cn(st.root, className)}>
        <input
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={st.input}
          disabled={isDisabled}
        />
        {Icon && Icon({ className: st.icon })}
      </div>
    )
  },
)

InputField.displayName = 'InputField'

export { InputField }
