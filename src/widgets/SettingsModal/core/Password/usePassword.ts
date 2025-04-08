import { useSession } from '@entities/auth/hooks/useSession'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { isNil } from '@shared/utils/functions'
import { useChangePassword } from '@entities/auth/api/changePassword'

import { passwordSchema } from '../../schemas/passwordSchema'
import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'

const usePassword = (props: ISettingsSectionProps) => {
  const { setActiveTab } = props

  const { user, isLoading } = useSession()

  const isOldPasswordEnabled =
    user?.userSecurityStatus === 'password' ||
    user?.userSecurityStatus === 'full'

  const schema = passwordSchema(isOldPasswordEnabled)
  const {
    control,
    getValues,
    formState: { isValid, isDirty },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      oldPassword: undefined,
      newPassword: '',
      newPasswordAgain: '',
    },
  })

  const { mutateAsync: changePassword, isPending } = useChangePassword()

  const sendForm = async () => {
    if (isPending) return

    const data = getValues()

    if (
      (isOldPasswordEnabled && isNil(data.oldPassword)) ||
      (!isOldPasswordEnabled &&
        isNil(data.newPassword) &&
        isNil(data.newPasswordAgain))
    )
      return

    await changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    })
    reset()
  }

  const isDisabled = !isValid || !isDirty

  return {
    isLoading,
    control,
    sendForm,
    isDisabled,
    isOldPasswordEnabled,
    setActiveTab,
    isPending,
  }
}

export { usePassword }
