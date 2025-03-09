import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { temporarySchema } from '../../schemas/temporarySchema'
import { useGetUserID } from '@entities/user/api/getUserID'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { isNil } from '@shared/utils/functions'
import { useLoginByID } from '@entities/auth/api/loginByID'

const useTemporary = (props: ISettingsSectionProps) => {
  const { setActiveTab } = props

  const { data, isLoading } = useGetUserID()

  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm<z.infer<typeof temporarySchema>>({
    resolver: zodResolver(temporarySchema),
    mode: 'all',
    defaultValues: { userID: '' },
  })

  const { mutateAsync: loginByID, isPending } = useLoginByID()

  const sendForm = async () => {
    if (isPending) return

    const data = getValues()

    if (isNil(data.userID)) return

    await loginByID({ userID: data.userID })
  }

  const isDisabled = !isValid

  const copyID = async () => {
    await navigator.clipboard.writeText(data ?? '')
    successToast({ Icon: UserIcon, message: 'ID скопирован' })
  }

  return {
    isLoading,
    setActiveTab,
    data,
    control,
    isDisabled,
    copyID,
    sendForm,
  }
}

export { useTemporary }
