import { LOCAL_STORAGE_KEYS } from '@shared/static'
import { useNavigationFallback } from '@shared/utils/hooks/useNavigationFallback'
import { closeModal } from '@widgets/ModalWrapper'

const useAdultModal = () => {
  const goBack = useNavigationFallback()

  const noClick = async () => {
    setTimeout(closeModal, 200)
    goBack()
  }

  const yesClick = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.IS_ADULT, 'true')
    closeModal()
  }

  return { noClick, yesClick }
}

export { useAdultModal }
