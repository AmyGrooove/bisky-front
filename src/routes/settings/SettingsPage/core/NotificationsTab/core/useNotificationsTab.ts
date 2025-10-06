import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { INotificationsTabProps } from '../types/INotificationsTabProps'

import { useUpdateEmail } from '@entities/account/api/updateEmail'
import { notificationsSchema } from '../schemas/notificationsSchema'

const useNotificationsTab = (props: INotificationsTabProps) => {
  const { data } = props

  const {
    control,
    watch,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof notificationsSchema>>({
    resolver: zodResolver(notificationsSchema),
    mode: 'all',
    defaultValues: { email: data?.email ?? '' },
  })

  const { mutateAsync: updateEmail, isPending: isUpdateEmailPending } =
    useUpdateEmail()

  const isUpdateEmailDisabled =
    data.email === watch('email') || !isValid || !isDirty

  const sendForm = async () => {
    if (isUpdateEmailPending) return

    const newEmail = getValues('email')

    await updateEmail({ email: newEmail })
  }

  return {
    control,
    isUpdateEmailDisabled,
    data,
    sendForm,
  }
}

export { useNotificationsTab }
