import { cn, isNil } from '@shared/utils/functions'

import { IInputFieldProps } from '../types/IInputFieldProps'

import { useInputField } from './useInputField'
import st from './InputField.module.scss'
import { forwardRef } from 'react'
import { Text } from '@shared/ui/atoms/Text'

const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      Icon,
      className,
      placeholder,
      isDisabled,
      errorText,
      label,
      type,
    } = useInputField(props)

    return (
      <div className={cn(st.root, className)}>
        {Icon && Icon({ className: st.icon })}
        {!isNil(label) && (
          <Text maxLines={1} className={st.labelText} isCustomColor>
            {label}
          </Text>
        )}
        <input
          type={type}
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={cn(st.input, { [st.input_error]: !isNil(errorText) })}
          disabled={isDisabled}
        />
        {!isNil(errorText) && (
          <Text isCustomColor className={st.errorText} maxLines={2}>
            {errorText}
          </Text>
        )}
      </div>
    )
  },
)

InputField.displayName = 'InputField'

export { InputField }
