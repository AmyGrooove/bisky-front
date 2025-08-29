import { useCallback } from 'react'

import { IInputCodeProps } from '../types/IInputCodeProps'

const useInputCode = (props: IInputCodeProps) => {
  const {
    length,
    value,
    onChange,
    className,
    errorText,
    label,
    isDisabled = false,
  } = props

  const handleChange = useCallback(
    (value: string) => {
      if (/^\d*$/.test(value)) {
        onChange(value)
      }
    },
    [onChange],
  )

  return {
    length,
    value,
    handleChange,
    className,
    errorText,
    label,
    isDisabled,
  }
}

export { useInputCode }
