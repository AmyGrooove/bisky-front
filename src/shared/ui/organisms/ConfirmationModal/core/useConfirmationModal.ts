import { closeAdditionalModal } from '@widgets/ModalWrapper'
import { IConfirmationModalProps } from '../types/IConfirmationModalProps'

const useConfirmationModal = (props: IConfirmationModalProps) => {
  const { callBack, title, yesButtonClassName, description } = props

  const handleCallback = async () => {
    await callBack()
    closeAdditionalModal()
  }

  return { handleCallback, title, yesButtonClassName, description }
}

export { useConfirmationModal }
