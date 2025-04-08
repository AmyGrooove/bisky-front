import { useSession } from '@entities/auth/hooks/useSession'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useUpdateEmail } from '@entities/user/api/updateEmail'
import { emailSchema } from '@widgets/SettingsModal/schemas/emailSchema'
import { isNil } from '@shared/utils/functions'

const useEmail = () => {
  const { user, isLoading } = useSession()

  const {
    control,
    getValues,
    watch,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    mode: 'all',
    defaultValues: { email: user?.email ?? null },
  })

  const { mutateAsync: updateEmail, isPending } = useUpdateEmail()

  const sendForm = async () => {
    if (isPending) return

    const data = getValues()

    if (isNil(data.email)) return

    await updateEmail({ email: data.email })
  }

  const isDisabled = user?.email === watch('email') || !isValid || !isDirty

  return { isLoading, control, sendForm, isDisabled }
}

export { useEmail }
