import { LOCAL_STORAGE_KEYS } from '@shared/static'
import { closeModal } from '@widgets/ModalWrapper'
import { redirect } from 'next/navigation'

const useAdultModal = () => {
  const noClick = async () => {
    setTimeout(closeModal, 200)
    redirect('/')
  }

  const yesClick = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.IS_ADULT, 'true')
    closeModal()
  }

  return { noClick, yesClick }
}

export { useAdultModal }
