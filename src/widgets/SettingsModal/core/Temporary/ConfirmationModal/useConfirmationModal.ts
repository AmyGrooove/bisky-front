import { useGetUserID } from '@entities/user/api/getUserID'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'
import { IConfirmationModalProps } from '../../../types/IConfirmationModalProps'
import { closeAdditionalModal } from '@widgets/ModalWrapper'

const useConfirmationModal = (props: IConfirmationModalProps) => {
  const { callBack } = props

  const { data } = useGetUserID()

  const copyID = async () => {
    await navigator.clipboard.writeText(data ?? '')
    successToast({ Icon: UserIcon, message: 'ID скопирован' })
  }

  const handleCallback = async () => {
    await callBack()
    closeAdditionalModal()
  }

  return { handleCallback, copyID }
}

export { useConfirmationModal }
