import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { IPasswordTabProps } from '../types/IPasswordTabProps'

import { useUpdateEmail } from '@entities/account/api/updateEmail'
import { passwordSchema } from '../schemas/passwordSchema'
import { useUpdatePassword } from '@entities/account/api/updatePassword'

const usePasswordTab = (props: IPasswordTabProps) => {
  const { data } = props

  const {
    control,
    watch,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    mode: 'all',
    defaultValues: { password: '', retryPassword: '' },
  })

  const { mutateAsync: updatePassword, isPending: isUpdatePasswordPending } =
    useUpdatePassword()

  const isUpdatePasswordDisabled = !isValid || !isDirty

  const sendForm = async () => {
    if (isUpdatePasswordPending) return

    const newPassword = getValues('password')
    const retryPassword = getValues('retryPassword')

    await updatePassword({ password:  })
  }

  return {
    control,
    isUpdateNicknameDisabled,
    data,
    sendForm,
  }
}

export { usePasswordTab }
