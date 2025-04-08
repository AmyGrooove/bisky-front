import { cn, isNil } from '@shared/utils/functions'
import { forwardRef } from 'react'
import { Text } from '@shared/ui/atoms/Text'
import { EyeIcon, EyeOffIcon } from '@shared/icons'

import { IInputFieldProps } from '../types/IInputFieldProps'

import { useInputField } from './useInputField'
import st from './InputField.module.scss'

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
      mergedRefs,
      inViewRef,
      inputClassName,
      isPasswordShow,
      setIsPasswordShow,
    } = useInputField(props, ref)

    return (
      <div ref={inViewRef} className={cn(st.root, className)}>
        {Icon && Icon({ className: st.icon })}
        {!isNil(label) && (
          <Text maxLines={1} className={st.labelText} isCustomColor>
            {label}
          </Text>
        )}
        <input
          type={isPasswordShow ? 'text' : type}
          ref={mergedRefs}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={cn(st.input, inputClassName, {
            [st.input_error]: !isNil(errorText),
          })}
          disabled={isDisabled}
        />
        {!isNil(errorText) && (
          <Text isCustomColor className={st.errorText} maxLines={2}>
            {errorText}
          </Text>
        )}
        {type === 'password' && (
          <>
            {isPasswordShow ? (
              <EyeOffIcon
                onClick={() => setIsPasswordShow(false)}
                className={st.eye}
              />
            ) : (
              <EyeIcon
                onClick={() => setIsPasswordShow(true)}
                className={st.eye}
              />
            )}
          </>
        )}
      </div>
    )
  },
)

InputField.displayName = 'InputField'

export { InputField }
