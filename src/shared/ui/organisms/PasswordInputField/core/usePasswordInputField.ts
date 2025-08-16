import { useState } from 'react'

import { IPasswordInputFieldProps } from '../types/IPasswordInputFieldProps'

const usePasswordInputField = (props: IPasswordInputFieldProps) => {
  const { ...otherProps } = props

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return { isPasswordVisible, setIsPasswordVisible, otherProps }
}

export { usePasswordInputField }
