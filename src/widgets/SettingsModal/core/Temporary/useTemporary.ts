import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useGetUserID } from '@entities/user/api/getUserID'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { isNil } from '@shared/utils/functions'
import { useLoginByID } from '@entities/auth/api/loginByID'
import { useLogout } from '@entities/auth/api/logout'
import { closeModal } from '@widgets/ModalWrapper'
import { useRouter } from 'next/navigation'
import { getWhoami } from '@entities/auth/api/getWhoami'

import { ISettingsSectionProps } from '../../types/ISettingsSectionProps'
import { temporarySchema } from '../../schemas/temporarySchema'

const useTemporary = (props: ISettingsSectionProps) => {
  const { setActiveTab } = props

  const { push } = useRouter()

  const { data, isLoading } = useGetUserID()

  const { mutateAsync: logoutUser, isPending: isLogoutPending } = useLogout()

  const {
    control,
    getValues,
    formState: { isValid, isDirty },
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

    loginByID({ userID: data.userID }).then(async () => {
      const { username } = await getWhoami()

      closeModal()
      push(`/user/${username}`)
    })
  }

  const isDisabled = !isValid || !isDirty

  const copyID = async () => {
    await navigator.clipboard.writeText(data?.userID ?? '')
    successToast({ Icon: UserIcon, message: 'ID скопирован' })
  }

  const logoutUserFromAccount = async () => {
    if (isLogoutPending) return

    await logoutUser()

    closeModal()
    push('/')
  }

  return {
    isLoading,
    setActiveTab,
    data,
    control,
    isDisabled,
    copyID,
    sendForm,
    isPending,
    logoutUserFromAccount,
  }
}

export { useTemporary }
