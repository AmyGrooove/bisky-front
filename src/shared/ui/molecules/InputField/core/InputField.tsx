import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef, memo } from 'react'

import { IInputFieldProps } from '../types/IInputFieldProps'

import { useInputField } from './useInputField'
import st from './InputField.module.scss'

const InputField = memo(
  forwardRef<HTMLInputElement, IInputFieldProps>((props, ref) => {
    const {
      value,
      onChange,
      className,
      isDisabled,
      errorText,
      label,
      placeholder,
      Icon,
      type,
      inputClassName,
    } = useInputField(props)

    return (
      <div className={cn(st.root, className)}>
        {!isNil(label) && (
          <Text maxLines={1} className={st.labelText}>
            {label}
          </Text>
        )}
        <div className={st.inputWrapper}>
          <input
            type={type}
            ref={ref}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className={cn(st.input, inputClassName, {
              [st.input_error]: !isNil(errorText),
            })}
            disabled={isDisabled}
            placeholder={placeholder}
          />
          {!isNil(Icon) && (
            <div className={st.icon}>
              {typeof Icon === 'function' ? <Icon /> : Icon}
            </div>
          )}
        </div>
        {!isNil(errorText) && (
          <Text className={st.errorText} maxLines={2}>
            {errorText}
          </Text>
        )}
      </div>
    )
  }),
)

InputField.displayName = 'InputField'

export { InputField }
