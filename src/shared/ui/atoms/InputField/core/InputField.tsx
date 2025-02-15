import { cloneElement } from 'react'

import { cn } from '@shared/utils/functions'

import { IInputFieldProps } from '../types/IInputFieldProps'

import { useInputField } from './useInputField'
import st from './InputField.module.scss'

const InputField = (props: IInputFieldProps) => {
  const { value, onChange, icon, className, placeholder, isDisabled } =
    useInputField(props)

  return (
    <div className={cn(st.root, className)}>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={st.input}
        disabled={isDisabled}
      />
      {icon && cloneElement(icon, { className: st.icon })}
    </div>
  )
}

export { InputField }
