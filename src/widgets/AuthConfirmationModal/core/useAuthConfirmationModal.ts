import { useGetUserID } from '@entities/user/api/getUserID'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { closeAdditionalModal } from '@widgets/ModalWrapper'
import { IAuthConfirmationModalProps } from '../types/IAuthConfirmationModalProps'

const useAuthConfirmationModal = (props: IAuthConfirmationModalProps) => {
  const { callBack, isIDTextEnabled = true } = props

  const { data } = useGetUserID()

  const copyID = async () => {
    await navigator.clipboard.writeText(data ?? '')
    successToast({ Icon: UserIcon, message: 'ID скопирован' })
  }

  const handleCallback = async () => {
    await callBack()
    closeAdditionalModal()
  }

  return { handleCallback, copyID, isIDTextEnabled }
}

export { useAuthConfirmationModal }
