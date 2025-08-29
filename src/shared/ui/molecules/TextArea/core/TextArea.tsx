import { cn, isNil } from '@shared/utils/functions'
import { Text } from '@shared/ui/atoms/Text'
import { forwardRef } from 'react'

import { ITextAreaProps } from '../types/ITextAreaProps'

import { useTextArea } from './useTextArea'
import st from './TextArea.module.scss'

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      className,
      isDisabled,
      errorText,
      label,
      placeholder,
    } = useTextArea(props)

    return (
      <div className={cn(st.root, className)}>
        {!isNil(label) && (
          <Text maxLines={1} className={st.labelText}>
            {label}
          </Text>
        )}
        <textarea
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(st.input, { [st.input_error]: !isNil(errorText) })}
          disabled={isDisabled}
          placeholder={placeholder}
        />
        {!isNil(errorText) && (
          <Text className={st.errorText} maxLines={2}>
            {errorText}
          </Text>
        )}
      </div>
    )
  },
)

export { TextArea }
