import { EyeIcon, EyeOffIcon } from '@shared/icons'
import { InputField } from '@shared/ui/molecules/InputField'

import { IPasswordInputFieldProps } from '../types/IPasswordInputFieldProps'

import { usePasswordInputField } from './usePasswordInputField'

const PasswordInputField = (props: IPasswordInputFieldProps) => {
  const { isPasswordVisible, toggleVisibility, otherProps } =
    usePasswordInputField(props)

  return (
    <InputField
      {...otherProps}
      type={isPasswordVisible ? 'text' : 'password'}
      Icon={(iconProps) =>
        isPasswordVisible ? (
          <EyeOffIcon {...iconProps} onClick={toggleVisibility} />
        ) : (
          <EyeIcon {...iconProps} onClick={toggleVisibility} />
        )
      }
    />
  )
}

export { PasswordInputField }
