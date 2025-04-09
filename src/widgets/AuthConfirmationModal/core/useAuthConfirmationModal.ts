import { useGetUserID } from '@entities/user/api/getUserID'
import { UserIcon } from '@shared/icons'
import { successToast } from '@shared/utils/toast'

import { IAuthConfirmationModalProps } from '../types/IAuthConfirmationModalProps'

const useAuthConfirmationModal = (props: IAuthConfirmationModalProps) => {
  const { isIDTextEnabled = false } = props

  const { data } = useGetUserID()

  const copyID = async () => {
    await navigator.clipboard.writeText(data?.userID ?? '')
    successToast({ Icon: UserIcon, message: 'ID скопирован' })
  }

  return { copyID, isIDTextEnabled }
}

export { useAuthConfirmationModal }
