import { setAdditionalModal } from '@widgets/ModalWrapper'
import { ConfirmationModal } from '@shared/ui/organisms/ConfirmationModal'
import { AuthModule } from '@widgets/AuthModule'

import { IAuthConfirmationModalProps } from '../types/IAuthConfirmationModalProps'

import st from './AuthConfirmationModal.module.scss'
import { useAuthConfirmationModal } from './useAuthConfirmationModal'

const AuthConfirmationModal = (props: IAuthConfirmationModalProps) => {
  const { copyID, isIDTextEnabled } = useAuthConfirmationModal(props)

  return (
    <ConfirmationModal
      callBack={async () => {
        setTimeout(() => setAdditionalModal(<AuthModule />), 210)
      }}
      title="Вы уверены, что хотите сменить аккаунт?"
      description={
        isIDTextEnabled ? (
          <>
            Аккаунт можно восстановить{' '}
            <strong onClick={copyID} className={st.link}>
              по ID
            </strong>{' '}
            в течение 3 месяцев, иначе он будет удалён
          </>
        ) : null
      }
      yesButtonClassName={st.button}
    />
  )
}

export { AuthConfirmationModal }
