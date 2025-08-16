import { EyeIcon, EyeOffIcon } from '@shared/icons'
import { InputField } from '@shared/ui/molecules/InputField'

import { IPasswordInputFieldProps } from '../types/IPasswordInputFieldProps'

import { usePasswordInputField } from './usePasswordInputField'

const PasswordInputField = (props: IPasswordInputFieldProps) => {
  const { isPasswordVisible, setIsPasswordVisible, otherProps } =
    usePasswordInputField(props)

  return (
    <InputField
      {...otherProps}
      type={isPasswordVisible ? 'text' : 'password'}
      Icon={(iconProps) =>
        isPasswordVisible ? (
          <EyeOffIcon
            {...iconProps}
            onClick={() => setIsPasswordVisible(false)}
          />
        ) : (
          <EyeIcon {...iconProps} onClick={() => setIsPasswordVisible(true)} />
        )
      }
    />
  )
}

export { PasswordInputField }
