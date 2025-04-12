import { useCreateTemporaryProfile } from '@entities/auth/api/createTemporaryProfile'
import { closeModal } from '@widgets/ModalWrapper'
import { useRouter } from 'next/navigation'
import { useLoginByID } from '@entities/auth/api/loginByID'
import { zodResolver } from '@hookform/resolvers/zod'
import { isNil } from '@shared/utils/functions'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { INoAuthorizeProps } from '../types/INoAuthorizeProps'
import { idSchema } from '../schemas/idSchema'

const useNoAuthorize = (props: INoAuthorizeProps) => {
  const { thenCallback, thenPushHref } = props

  const { push } = useRouter()

  const {
    mutateAsync: createTemporaryProfile,
    isPending: isCreateTemporaryProfilePending,
    error: createTemporaryProfileError,
  } = useCreateTemporaryProfile()
  const {
    mutateAsync: loginByID,
    isPending: isLoginByIDPending,
    error: loginByIDError,
  } = useLoginByID()

  const {
    control,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof idSchema>>({
    resolver: zodResolver(idSchema),
    mode: 'all',
    defaultValues: { userID: '' },
  })

  const isDisabled = !isValid || !isDirty
  const errorText = createTemporaryProfileError || loginByIDError

  const processCallback = () => {
    setTimeout(() => {
      if (thenCallback) thenCallback()
      if (thenPushHref) push(thenPushHref)
    }, 300)
  }

  const createNewProfile = async () => {
    if (isCreateTemporaryProfilePending) return

    createTemporaryProfile().then(() => {
      closeModal()

      processCallback()
    })
  }

  const sendForm = async () => {
    if (isLoginByIDPending) return

    const data = getValues()

    if (isNil(data.userID)) return

    await loginByID({ userID: data.userID })
  }

  return {
    createNewProfile,
    processCallback,
    control,
    sendForm,
    isDisabled,
    errorText,
  }
}

export { useNoAuthorize }
