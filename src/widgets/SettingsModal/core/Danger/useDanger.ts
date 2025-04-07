import { useLogout } from '@entities/auth/api/logout'
import { closeModal } from '@widgets/ModalWrapper'

const useDanger = () => {
  const { mutateAsync: logoutUser, isPending: isLogoutPending } = useLogout()

  const logoutUserFromAccount = async () => {
    if (isLogoutPending) return

    await logoutUser()

    closeModal()
  }

  return { logoutUserFromAccount }
}

export { useDanger }
