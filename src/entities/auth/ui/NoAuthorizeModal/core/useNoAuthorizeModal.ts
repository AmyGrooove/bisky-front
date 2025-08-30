import { closeAdditionalModal, closeModal } from '@widgets/ModalWrapper'
import { isNil } from '@shared/utils/functions'
import { useCreateNewAccount } from '@entities/auth/api/createNewAccount'
import { useLoginByTemporaryCode } from '@entities/auth/api/loginByTemporaryCode'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { INoAuthorizeModalProps } from '../types/INoAuthorizeModalProps'
import { loginByTemporaryCodeSchema } from '../schemas/loginByTemporaryCodeSchema'

const useNoAuthorizeModal = (props: INoAuthorizeModalProps) => {
  const { successCallback } = props

  const {
    mutateAsync: createTemporaryProfile,
    isPending: isCreateTemporaryProfilePending,
    error: createTemporaryProfileError,
  } = useCreateNewAccount()
  const {
    mutateAsync: loginByTemporaryCode,
    isPending: isLoginByTemporaryCodePending,
    error: loginByTemporaryCodeError,
  } = useLoginByTemporaryCode()

  const {
    control,
    getValues,
    formState: { isValid, isDirty },
  } = useForm<z.infer<typeof loginByTemporaryCodeSchema>>({
    resolver: zodResolver(loginByTemporaryCodeSchema),
    mode: 'all',
    defaultValues: { temporaryCode: '' },
  })

  const isDisabledLoginByTemporaryCode = !isValid || !isDirty
  const error = createTemporaryProfileError || loginByTemporaryCodeError

  const processCallback = () => {
    closeAdditionalModal()
    closeModal()
    if (!isNil(successCallback)) successCallback()
  }

  const createNewProfile = async () => {
    if (isCreateTemporaryProfilePending) return

    await createTemporaryProfile()
    processCallback()
  }

  const sendForm = async () => {
    if (isLoginByTemporaryCodePending) return

    const { temporaryCode } = getValues()

    if (isNil(temporaryCode)) return

    await loginByTemporaryCode({ temporaryCode })
    processCallback()
  }

  return {
    error,
    sendForm,
    control,
    isDisabledLoginByTemporaryCode,
    createNewProfile,
    processCallback,
  }
}

export { useNoAuthorizeModal }
