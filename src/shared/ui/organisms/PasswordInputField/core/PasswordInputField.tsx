import { EyeIcon, EyeOffIcon } from '@shared/icons'
import { InputField } from '@shared/ui/molecules/InputField'
import { forwardRef, memo } from 'react'

import { IPasswordInputFieldProps } from '../types/IPasswordInputFieldProps'

import { usePasswordInputField } from './usePasswordInputField'

const PasswordInputField = memo(
  forwardRef<HTMLInputElement, IPasswordInputFieldProps>((props, ref) => {
    const { isPasswordVisible, toggleVisibility, otherProps } =
      usePasswordInputField(props)

    return (
      <InputField
        {...otherProps}
        ref={ref}
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
  }),
)

PasswordInputField.displayName = 'PasswordInputField'

export { PasswordInputField }
