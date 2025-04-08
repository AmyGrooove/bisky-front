import { cn, isNil } from '@shared/utils/functions'
import { OTPInput } from 'input-otp'

import { IInputCodeProps } from '../types/IInputCodeProps'
import { Text } from '../../Text'

import { useInputCode } from './useInputCode'
import st from './InputCode.module.scss'

const InputCode = (props: IInputCodeProps) => {
  const { length, value, handleChange, className, isAutoFocus, label } =
    useInputCode(props)

  return (
    <OTPInput
      value={value}
      onChange={handleChange}
      maxLength={length}
      inputMode="numeric"
      autoFocus={isAutoFocus}
      containerClassName={cn(st.root, className)}
      render={({ slots }) => (
        <>
          {!isNil(label) && (
            <Text maxLines={1} className={st.labelText} isCustomColor>
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
        </>
      )}
    />
  )
}

export { InputCode }
