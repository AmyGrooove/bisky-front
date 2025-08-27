import { cn, isNil } from '@shared/utils/functions'
import { OTPInput } from 'input-otp'
import { Text } from '@shared/ui/atoms/Text'

import { IInputCodeProps } from '../types/IInputCodeProps'

import { useInputCode } from './useInputCode'
import st from './InputCode.module.scss'

const InputCode = (props: IInputCodeProps) => {
  const {
    length,
    value,
    handleChange,
    className,
    errorText,
    label,
    isDisabled,
  } = useInputCode(props)

  return (
    <OTPInput
      disabled={isDisabled}
      value={value}
      onChange={handleChange}
      maxLength={length}
      inputMode="numeric"
      containerClassName={cn(st.root, className)}
      render={({ slots }) => (
        <>
          {!isNil(label) && (
            <Text maxLines={1} className={st.labelText}>
              {label}
            </Text>
          )}
          <div className={st.codeWrapper}>
            {slots.map(({ char, placeholderChar, isActive }, index) => (
              <Text
                weight="700"
                key={index}
                className={cn(st.slot, { [st.slot_active]: isActive })}
              >
                {char ?? placeholderChar}
              </Text>
            ))}
          </div>
          {!isNil(errorText) && (
            <Text className={st.errorText} maxLines={2}>
              {errorText}
            </Text>
          )}
        </>
      )}
    />
  )
}

export { InputCode }
