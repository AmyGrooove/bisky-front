import { useCallback, useState } from 'react'

import { IPasswordInputFieldProps } from '../types/IPasswordInputFieldProps'

const usePasswordInputField = (props: IPasswordInputFieldProps) => {
  const { ...otherProps } = props

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const toggleVisibility = useCallback(
    () => setIsPasswordVisible((prev) => !prev),
    [],
  )

  return { isPasswordVisible, toggleVisibility, otherProps }
}

export { usePasswordInputField }
